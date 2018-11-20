import React from 'react';
import PersonSearchResult from './PersonSearchResult';
import PersonSearchForm from './PersonSearchForm';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import { fromEvent, of } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { Modal } from 'react-materialize';

class PersonSearchPanel extends React.Component {

    eventTarget = new EventTarget();

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            error: undefined
        }
    }

    componentDidMount() {
        fromEvent(this.eventTarget, "OnChange")
            .pipe(debounceTime(200))
            .pipe(switchMap(event =>
                axios.get('http://localhost:8080/person?name=' + event.detail)
                    .catch(error => {
                        console.log('Error: ' + error);
                        this.setState({
                            error: 'Fehler bei Serveranfrage'
                        })
                        return of(undefined);
                    })
            ))
            .subscribe(res => {
                if (res.data !== undefined) {
                    this.setState({
                        persons : res.data,
                        error: undefined
                    })
                }
            });
    }

    onChange = (text) => {
        /*
        axios.get('http://localhost:8080/person?name=' + text).then(res => {
            this.setState({ persons : res.data });
        });
        */
        this.eventTarget.dispatchEvent(
            new CustomEvent('OnChange', { detail: text })
        )
    }

    render() {
        let element;
        if (this.state.error === undefined) {
            element = <PersonSearchResult persons={this.state.persons} />;
        } else {
            element = <Modal header='Error' open='true'>{this.state.error}</Modal>;
        }
        return (
            <ErrorBoundary>
                <h2 className="left-align">Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                {element}
            </ErrorBoundary>
        )
    }

}

export default PersonSearchPanel;

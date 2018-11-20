import React from 'react';

class PersonSearchResult extends React.Component {

    render1() {
        const rows = [];
        this.props.persons.forEach(person => {
            rows.push(<PersonRow key={person.id} person={person} />)
        });
        return (
            <table>
                <thead>
                <PersonHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }


    render() {
        const rows = this.props.persons.map(person => {
            return <PersonRow key={person.id} person={person} />;
        })
        return (
            <table>
                <thead>
                <PersonHeader />
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

export default PersonSearchResult;

function PersonHeader() {
    return (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Vorname</th>
        </tr>
    )
}

const PersonRow = (props) => {
    if (props.person.name === 'XXX1') {
        throw new Error('I crashed');
    }
    return (
        <tr>
            <td>{props.person.id}</td>
            <td>{props.person.name}</td>
            <td>{props.person.vorname}</td>
        </tr>
    )
}
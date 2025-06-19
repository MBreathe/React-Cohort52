

function Person({ person }) {
    if (!person) return null;

    return (
        <ul>
            <li>{person.firstName}</li>
            <li>{person.lastName}</li>
            <li>{person.email}</li>
        </ul>
    )
}

export default Person
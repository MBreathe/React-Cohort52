import {useEffect, useState} from "react";
import Person from "./Person.jsx";


function PersonController() {
    const [person, setPerson] = useState(null)

    async function getPerson() {
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            if (!response.ok) {
                throw new Error('Couldn\'t fetch a person, please check API call');
            }

            const data = await response.json();
            const person = data.results[0];
            setPerson({
                firstName: person.name.first,
                lastName: person.name.last,
                email: person.email
            });

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPerson();
    }, [])

    console.log(person);

    return <Person person={person} />
}

export default PersonController;
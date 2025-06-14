const arr = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

function Hobby({ hobbies }) {
    return hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)
}

function HobbyList() {
    return (
        <ul>
            <Hobby hobbies={arr} />
        </ul>
    );
}

export default HobbyList
import Form from "./Form/Form.jsx";
import Section from "./Section/Section.jsx";
import Total from "./Total/Total.jsx";
import Button from "./Button/Button.jsx";


function App() {
    return (
        <>
            <h1>Budget Calculator</h1>
            <Form />
            <Section title={"Rent"} currency={"EUR"} amount={"1000"} />
            <Total currency={"EUR"} total={1000}/>
            <Button text={"Clear list"}/>
        </>
    )
}

export default App
import Form from "./Form/Form.jsx";
import Section from "./Section/Section.jsx";
import Total from "./Total/Total.jsx";
import Button from "./Button/Button.jsx";
import { useState } from "react";


function App() {
    const [expense, setExpense] = useState({
        title: "",
        amount: '',
    });
    const [list, setList] = useState([]);

    return (
        <>
            <h1>Budget Calculator</h1>
            <Form expense={expense} setExpense={setExpense} list={list} setList={setList} />
            { list.map((element, index) => <Section key={index} currency={"EUR"} {...element}/>)}
            <Total currency={"EUR"} total={1000}/>
            <Button text={"Clear list"} onClick={() => setList([])}/>
        </>
    )
}

export default App
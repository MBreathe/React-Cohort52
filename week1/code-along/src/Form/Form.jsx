import Button from "../Button/Button.jsx"
import style from "./form.module.css"

function errorHandler(e) {
    console.log(e);
}

function Form({ expense, setExpense, list, setList }) {
    return (
        <div className={style.form}>
            <input type={"text"} value={expense.title} placeholder={"Expense title"} onChange={
                (e) => setExpense({...expense, title: e.target.value})
            } />
            <input type={"number"} value={expense.amount} placeholder={"0.00"} onChange={
                (e) => setExpense({...expense, amount: Number(e.target.value)})
            } />
            <Button text={"+"} onClick={
                () => {
                    setList([...list, expense]);
                    setExpense({title: "", amount: ''});
                }
            } />
        </div>
    )
}

export default Form
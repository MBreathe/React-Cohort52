import Button from "../Button/Button.jsx"
import style from "./form.module.css"

function Form({ expense, setExpense, list, setList }) {
    const id = crypto.randomUUID();

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
                    setList([...list, {...expense, id: id}]);
                    setExpense({id: '', title: "", amount: ''});
                }
            } />
        </div>
    )
}

export default Form
import style from "./section.module.css"
import Button from "../Button/Button.jsx"

function deleteItem(e, list, setList) {
    const targetID = e.target.parentElement.id;
    setList(list.filter(item => item.id !== targetID))
}

function Section({ id, title, currency, amount, list, setList }) {
    if (!amount) return null;
    amount = amount.toFixed(2);

    return (
        <div className={style.section} id={id}>
            <span>{title}</span>
            <span>{currency}</span>
            <span>{amount}</span>
            <Button text={"D"} onClick={e => deleteItem(e, list, setList)} />
        </div>
    )
}

export default Section
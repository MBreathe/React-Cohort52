import style from "./section.module.css"

function Section({ title, currency, amount }) {
    if (!amount) return null;
    amount = amount.toFixed(2);

    return (
        <div className={style.section}>
            <span>{title}</span>
            <span>{currency}</span>
            <span>{amount}</span>
        </div>
    )
}

export default Section
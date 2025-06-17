

function Total({currency, list}) {
    const total = list.reduce((acc, item) => acc + item.amount, 0).toFixed(2);

    return (
        <div>
            <p>-------------------</p>
            <span>Total :</span>
            <span>{currency}</span>
            <h2>{total}</h2>
        </div>
    )
}

export default Total
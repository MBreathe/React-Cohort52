

function Total({currency, total}) {
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
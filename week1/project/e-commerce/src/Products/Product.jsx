

function Product({image, title}) {
    return (
        <li>
            <img src={image} alt={title} />
            <span>{title}</span>
        </li>
    )
}

export default Product
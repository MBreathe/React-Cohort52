import style from './products.module.css'

function Product({image, title}) {
    return (
        <li className={style.product}>
            <img className={style.image} src={image} alt={title} />
            <span>{title}</span>
        </li>
    )
}

export default Product
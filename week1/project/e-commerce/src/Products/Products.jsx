import Product from "./Product.jsx";
import products from "../fake-data/all-products.js"
import style from "./products.module.css"

function productFilter(selectedCategory) {
    if (!selectedCategory || selectedCategory === 'all') return products
    return products.filter(product => product.category === selectedCategory)
}

function Products({ selectedCategory }) {
    const filteredProducts = productFilter(selectedCategory);

    return (
        <div className={style.products}>
            <ul>
                {filteredProducts.map(product => <Product key={product.id} {...product} />)}
            </ul>
        </div>
    )
}

export default Products
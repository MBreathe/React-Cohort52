import categories from "../fake-data/all-categories.js"
import style from "./navbar.module.css"

function Navbar({ selectedCategory, setCategory }) {
    return (
        <div className={style.navbar}>
            <ul className={style.categoriesList}>
                {
                    categories
                        .map(category =>
                            <li
                                key={category}
                                className={`${style.categoryLi} ${category.includes("FAKE: " + selectedCategory) ? style.active : ""}`}
                                onClick={() => {
                                    if (selectedCategory === 'all') return setCategory(category.slice(6));
                                    setCategory('all');
                                }}>{category}
                            </li>)}
            </ul>
        </div>
    )
}

export default Navbar
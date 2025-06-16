import categories from "../fake-data/all-categories.js"
import style from "./navbar.module.css"

function categoryClickHandler(e) {
    return e.target.innerText.slice(6)
}

function Navbar({ selectedCategory, setCategory }) {
    return (
        <div className={style.navbar}>
            <ul>
                {
                    categories
                        .map(category =>
                            <li
                                key={category}
                                className={category.includes("FAKE: " + selectedCategory) ? style.active : ""}
                                onClick={(e) => setCategory(categoryClickHandler(e))}>{category}
                            </li>)}
            </ul>
        </div>
    )
}

export default Navbar
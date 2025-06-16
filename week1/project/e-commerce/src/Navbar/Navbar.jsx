import categories from "../fake-data/all-categories.js"
import style from "./navbar.module.css"
import { useState } from "react";

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
                                style={{border: category.includes("FAKE: " + selectedCategory) ? "3px solid blue" : "1px solid #373737"}}
                                onClick={(e) => setCategory(categoryClickHandler(e))}>{category}
                            </li>)}
            </ul>
        </div>
    )
}

export default Navbar
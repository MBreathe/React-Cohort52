import Navbar from "./Navbar/Navbar.jsx"
import Products from "./Products/Products.jsx"
import "./index.css"
import { useState } from "react";

function App() {
    const [selectedCategory, setCategory] = useState("all");

    return (
        <>
            <h1 className="title">Products</h1>
            <Navbar setCategory={setCategory} selectedCategory={selectedCategory}/>
            <Products selectedCategory={selectedCategory}/>
        </>
    )
}

export default App

import React, {useState, useEffect} from "react"
import CountButton from "./components/CountButton/CountButton"
import SearchBar from "./components/SearchBar/SearchBar"
import Paragraph from "./components/Paragraph/Paragraph"



const App = () => {
    const [productState, setProductState] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsArray) => {
                const newProductState = productsArray.map((product) => ({
                    title: product.title,
                    image: product.image,
                    price: product.price
                }));

                setProductState(newProductState);
            });
    }, []);

    const hasProducts = productState.length > 0

    return (
        <div>
            <CountButton incrementBy={1} buttonColor = "aquamarine"/>
            <CountButton incrementBy={2} buttonColor = "hotpink"/>
            <Paragraph/>
            {hasProducts ? <SearchBar products={productState}/> : "Loading"}





        </div>

    )
}

export default App



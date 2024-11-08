import React, {useState} from "react";



const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick =() =>{
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return <div>
        <input type="text" value = {searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

        <ul>
        {filteredProducts.map((product)=>{
            return(
            <li key={product.title}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} style={{width: '100px'}}/>
                <p>${product.price}</p>

            </li>
        )

        })}
        </ul>


    </div>
}

export default SearchBar
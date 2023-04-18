import React, { useContext } from 'react'
import  ProductProvider  from '../contexts/ProductContext'

function Home() {
    const { products } = useContext(ProductProvider)
    console.log(products)

    const filterdProducts = products.filter((item) => {
        return (
            item.category === "men's clothing"
        );
    });
    //console.log(filterdProducts)
    return (
        <div>Home</div>
    )
}

export default Home
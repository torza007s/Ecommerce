import React, { useContext } from 'react'
import   { ProductContext }  from '../contexts/ProductContext'

function Home() {
    const { products } = useContext(ProductContext)
    //console.log(products)

    const filterdProducts = products.filter((item) => {
        return (
            item.category === "men's clothing"
        );
    });
    console.log(filterdProducts)
    return (
        <div>Home</div>
    )
}

export default Home
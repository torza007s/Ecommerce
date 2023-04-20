import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'



function Home() {
    const { products } = useContext(ProductContext)
    console.log(products)

    const filterdProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
    console.log(filterdProducts)
    return (
        <div>
            <section className='py-4'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '>
                        {filterdProducts.map((product) => {
                            return <Product  product={product} key={product.id}/>

                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { Cartcontext } from '../contexts/CartContext'

const Product = ({ product }) => {
    const { addtoCart } = useContext(Cartcontext)
    const { id, image, category, title, price } = product
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[200px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    {/*image */}
                    <div className='w-[160px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[130px] group-hover:scale-110 duration-300' src={image} alt='' />
                    </div>
                </div>
                {/* buttons */}
                <div className='absolute top-3 right-0 group-hover:right-3 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button onClick={() => addtoCart()}>
                        <div className='flex justify-center items-center  text-white w-12 h-12 bg-red-500'>
                            <BsFillCartPlusFill className='text-3xl' />
                        </div>
                    </button>
                    <Link to={`/product/${id}`} className='w-12 h-12 bg-gray-100 flex justify-center items-center text-primary drop-shadom-xl'>
                        <AiFillEye className='' />
                    </Link>

                </div>

            </div>

            <div>
                <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1'>{title}</h2>
                </Link>

                <div className='font-semibold'>{price}</div>
            </div>

        </div>

    )
}

export default Product
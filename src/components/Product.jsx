import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'

const Product = ({ product }) => {
    console.log(product)
    const { id, image, category, title, price } = product
    return (

        <>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 duration-300' src={image} alt='' />
                    </div>
                </div>
                <div className='absolute top-3 right-0 group-hover:right-3 bg-red-500 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button>
                        <div className='flex justify-center items-center  text-white w-6 h-6'>
                            <BsFillCartPlusFill className='text-3xl'/>
                        </div>
                    </button>
                    <hr/>
                    <div className='flex justify-center mt-2'>
                    <Link to={'/'} className='flex justify-center items-center   bg-white drop-shadow-xl w-6 h-6'>
                        <AiFillEye className=''/>
                    </Link>
                    </div>
                </div>
            </div>
           
        </>

    )
}

export default Product
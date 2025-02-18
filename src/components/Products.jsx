import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import axios from 'axios'

const Products = () => {
    const [product , setProduct] = useState([])

    const fetchAllProducts = async() => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data)
            if (response.data) {
                setProduct(response.data)
                console.log("setprodyct" , response.data)
            } else {
                console.log("Error while fetch Produts")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    },[])

  return (
    <>
        <main className='flex flex-col justify-center items-center mt-4'>
            <section className='flex gap-1 items-center'>
                <div className='h-8 w-2 bg-pink-500'></div>
                <div className='text-4xl font-bold'>OUR PRODUCTS</div>
            </section>
            <section>
                <h3 className='text-2xl'>Explore Our Products</h3>
            </section>
            <section className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6 '>
                {
                    product.map((item) => (
                        <section className=''>
                            <ProductsCard product={item} key={item.id}/>

                        </section>
                    ))
                }
            </section>
        </main>
    </>
  )
}

export default Products
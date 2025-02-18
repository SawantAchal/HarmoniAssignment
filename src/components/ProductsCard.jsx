import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <>
        <main>
            <section className='p-3.5 h-96 flex flex-col items-center justify-between border-2 w-3xs'>
                <img src={product.image} alt='product image' className='h-56  p-3'/>
                <section className='flex items-center flex-col'>
                    <p>{product.title}</p>
                    <section className='flex flex-col'>
                        <p>${product.price}</p>
                        <section className='flex '>
                            <p></p>
                            <p>({product.rating.count})</p>
                        </section>
                    </section>
                </section>
                <button className='bg-black text-white w-full bottom-0 h-9'>ADD TO CART</button>
            </section>
        </main>
    </>
  )
}

export default ProductsCard
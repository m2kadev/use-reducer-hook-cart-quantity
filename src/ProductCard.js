import React from 'react'
import useShop from './ShopContext'

const ProductCard = ({name, price, item}) => {
  const { addToCart } = useShop()

  return (
    <div className='product'>
      <p>{name}</p>
      <span>{price}</span>
      <button onClick={() => {
        addToCart({name, price, item})
      }}>Add To Cart</button>
    </div>
  )
}

export default ProductCard

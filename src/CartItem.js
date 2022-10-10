import React from 'react'

const CartItem = ({ product }) => {
  return (
    <div className='cart-item'>
      <p>{product.name}</p>
      <p style={{fontSize: ".8rem", fontWeight: "bold"}}>{product.item} Items</p>
      <p>{product.price}</p>
    </div>
  )
}

export default CartItem

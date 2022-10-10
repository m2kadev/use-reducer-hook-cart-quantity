import React from 'react'

const Total = ({ total }) => {
  return (
    <div className='cart-item-total'>
      <p>Total:</p>
      <p>{total}</p>
    </div>
  )
}

export default Total

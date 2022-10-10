import CartItem from './CartItem'
import useShop from './ShopContext'
import Total from './Total'

const Cart = () => {
  const { total, products } = useShop()
  return (
    <div className='cart'>
      {products?.map((product, index) => (
        <CartItem product={product} key={index} />
      ))}
      <Total total={total} />
    </div>
  )
}

export default Cart

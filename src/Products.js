import ProductCard from './ProductCard'
import { ShopData } from './ShopData'

const Products = () => {
  

  return (
    <div>
      <title>Welcome to DC clothing Shop</title>
      <div className="product-wrapper">
        {ShopData.map((data, index) => (
            <ProductCard key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default Products

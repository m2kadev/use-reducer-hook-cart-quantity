import {createContext, useContext, useReducer} from 'react'
import shopReducer, { initialState } from './shopReducer'

const ShopContext = createContext()

export const ShopProvider = ({children}) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        //let updatedCart = state.products.concat(product)
        let updatedCart = []
        if (state.products.length === 0) {
            updatedCart = [...state.products, product]
        } else {
            let exist = state.products.findIndex((p, index) => p.name === product.name)
            
            if (exist > -1) {
                updatedCart = [...state.products]
                state.products[exist].item+=1
            } else {
                updatedCart = [...state.products, product]
            }
        }
        updatePrice(updatedCart)
        dispatch({
            type: "ADD_TO_CART", 
            payload: {
                products: updatedCart
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(currentProduct => product.name !== currentProduct.name)
        updatePrice(updatedCart)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const updatePrice = (products) => {
        let total = 0
        products.forEach((product) => (total += product.price))

        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total: total
            }
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("No Data")
    }

    return context
}

export default useShop
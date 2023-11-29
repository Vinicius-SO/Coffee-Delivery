import { Minus, Plus } from "phosphor-react"
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { CoffeeCardProps } from "../CoffeCard"
// import { Buy } from "./styles"

export function ManageCart ({coffe}:CoffeeCardProps) {

    const {cart, addProductToShopCart, deleteProductAtCart} = useContext(ShoppingCartContext)

    

    const [count, setCount ] = useState(() => {
        const cartItem = cart.find(cartItem=>{
            return cartItem.id === coffe.id
        })
        if(cartItem){
            return cartItem.value
        }else{
            return 0
        }
    })
    
    return(
        <div className="buy">
            <button  onClick={()=>{
                setCount(state=>{
                    if(state > 0){
                        return state - 1
                    }
                    return state
                })
                deleteProductAtCart(coffe.id)
            }}>
                <Minus weight="bold" size={14}/> 
            </button>
            {count}
            <button onClick={()=>{
                setCount(state=>{
                    return state + 1
                })
                addProductToShopCart(coffe.id)
            }}>
                <Plus weight="bold" size={14}/>
            </button>
        </div>
    )
}
import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { coffees, CoffeType } from '../utils/CoffeList'


type UseCartType = () => {
    getActiveCoffes: ()=> CoffeType[]
    getCartSum: () => number
} 


export const useCart:UseCartType = ()=>{

    const {cart} = useContext(ShoppingCartContext)
    

    function getActiveCoffes(){
        const activeCoffes:CoffeType[] = []

        const coffeList = new Map<number,CoffeType>()

        coffees.forEach(coffe=>{
            coffeList.set(coffe.id,coffe)
        })

        
        cart.forEach(cartItem => {
            const activeItem = coffeList.get(cartItem.id)
        
            activeCoffes.push(activeItem!)
        })
        
        // console.log(activeCoffes)

        return activeCoffes

    }       

    function getCartSum () {
        
        const coffeList = new Map<number,CoffeType>()

        coffees.forEach(coffe=>{
            coffeList.set(coffe.id,coffe)
        })


        const cartSum = cart.reduce((acc,curentvalue)=>{
            const activeCoffe = coffeList.get(curentvalue.id)
            console.log(curentvalue.value)
            return acc + (activeCoffe!.price * curentvalue.value)
        },0)
        
        return cartSum
    }


    return {getActiveCoffes, getCartSum}
}
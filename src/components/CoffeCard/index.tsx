import { BuyContainer, CoffeeCardContainer } from "./styles";
import Coffee from '../../assets/Coffee.svg'
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal'
import { ManageCart } from "../ManageCart";


interface CoffeeItem{
    id:number
    title: string
    description: string
    type: string[]
    price: number
    img:string
    // cart: number
}

export interface CoffeeCardProps{
    coffe: CoffeeItem
}

export function CoffeeCard ({coffe}:CoffeeCardProps){
   
    const {cart, updateCountProduct} = useContext(ShoppingCartContext)

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
   
    const productRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (productRef.current) {
          ScrollReveal().reveal(productRef.current, {
            origin: 'bottom',
            delay: 500,
            duration: 750,
            distance: '40px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            // reset:true
          });
        }
      }, []);

    const formatedPrice = coffe.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // console.log(cart)
    
    
    return(
        <CoffeeCardContainer ref={productRef}>
            <img src={coffe.img} alt=""/>
            {/* <br /> */}
            <div style={{display: 'flex', gap: '4px'}}>
                {coffe.type.map((types:string)=>{
                    return(
                        <span className="type">{types}</span>
                    )
                })}
            </div>
            <h3>{coffe.title}</h3>
            <span className="description">{coffe.description}</span>
            
            <BuyContainer>
                <span style={{marginRight: '1.44rem'}}>
                    R$
                    <span>{formatedPrice}</span>
                </span>
                <div className="buy">
            <button  onClick={()=>{
                setCount(state=>{
                    if(state > 0){
                        return state - 1
                    }
                    return state
                })
                // deleteProductAtCart(coffe.id)
            }}>
                <Minus weight="bold" size={14}/> 
            </button>
            {count}
            <button onClick={()=>{
                setCount(state=>{
                    return state + 1
                })
                // addProductToShopCart(coffe.id)
            }}>
                <Plus weight="bold" size={14}/>
            </button>
        </div>
                 <button 
                    className="cart"
                    onClick={()=>{
                        updateCountProduct(coffe.id, count)
                    }}   
                 >
                    <ShoppingCart weight="fill"/>
                </button>
            </BuyContainer>

        </CoffeeCardContainer>
    )
}
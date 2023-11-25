import { BuyContainer, CoffeeCardContainer } from "./styles";
import Coffee from '../../assets/Coffee.svg'
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface CoffeeItem{
    id:number
    title: string
    description: string
    type: string[]
    price: number
    img:string
    // cart: number
}

interface CoffeeCardProps{
    coffe: CoffeeItem
}

export function CoffeeCard ({coffe}:CoffeeCardProps){
    const {cart, addProductToShopCart} = useContext(ShoppingCartContext)


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
    
    console.log(cart)
   
    const formatedPrice = coffe.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // console.log(cart)
    
    
    return(
        <CoffeeCardContainer>
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
                <span>
                    R$
                    <span>{formatedPrice}</span>
                </span>

                <div className="buy">
                    <button onClick={()=>{
                        setCount(state=>{
                            if(state > 0){
                                return state - 1
                            }
                            return state
                        })
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
                
                 <Link to='/cart' className="cart"><ShoppingCart weight="fill"/></Link>
                {/* <div className="cart"><ShoppingCart weight="fill"/></div> */}
            </BuyContainer>

        </CoffeeCardContainer>
    )
}
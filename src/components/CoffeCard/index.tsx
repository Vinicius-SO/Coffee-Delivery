import { BuyContainer, CoffeeCardContainer } from "./styles";
import Coffee from '../../assets/Coffee.svg'
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useContext } from "react";


interface CoffeeItem{
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
    // const {changeCartValue} = useContext(CoffeTypeContext)
    const formatedPrice = coffe.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

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
                    <button >
                         <Minus weight="bold" size={14}/> 
                    </button>
                       {0}
                    <button>
                        <Plus weight="bold" size={14}/>
                    </button>
                 </div>
                
                <div className="cart"><ShoppingCart weight="fill"/></div>
            </BuyContainer>

        </CoffeeCardContainer>
    )
}
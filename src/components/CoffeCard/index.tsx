import { BuyContainer, CoffeeCardContainer } from "./styles";
import Coffee from '../../assets/Coffee.svg'
import { Minus, Plus, ShoppingCart } from "phosphor-react";


interface CoffeeItem{
    title: string
    description: string
    type: string[]
    price: number
    img:string

}

interface CoffeeCardProps{
    coffee: CoffeeItem
}



export function CoffeeCard ({coffee}:CoffeeCardProps){

    const formatedPrice = coffee.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return(
        <CoffeeCardContainer>
            <img src={coffee.img} alt=""/>
            {/* <br /> */}
            <div style={{display: 'flex', gap: '4px'}}>
                {coffee.type.map((types:string)=>{
                    return(
                        <span className="type">{types}</span>
                    )
                })}
            </div>
            <h3>{coffee.title}</h3>
            <span className="description">{coffee.description}</span>
            
            <BuyContainer>
                <span>
                    R$
                    <span>{formatedPrice}</span>
                </span>

                <div className="buy"><Minus weight="bold" size={14}/> 1 <Plus weight="bold" size={14}/> </div>
                
                <div className="cart"><ShoppingCart weight="fill"/></div>
            </BuyContainer>

        </CoffeeCardContainer>
    )
}
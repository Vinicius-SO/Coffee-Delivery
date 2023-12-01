import { CartCoffeContainer, Divider, Remove } from "./styles";
import { coffees } from "../../../../utils/CoffeList";
import { ManageCart } from "../../../../components/ManageCart";
import { Trash } from "phosphor-react";
import { useCart } from "../../../../hooks/useCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

export function SelectedCoffeCard () {
    // const coffe = coffees[0]
    const {removeProductAtCart} = useContext(ShoppingCartContext)
    
    const { getActiveCoffes, getCartSum } = useCart()

    const activeCoffes = getActiveCoffes()

    const cartSum = getCartSum()

    console.log(activeCoffes)
    return(
        <>
        
                {activeCoffes.map(coffe=>{
                    return(
                        <>
                            <CartCoffeContainer>
                                <div>
                                    <img src={coffe.img} style={{width: '64px', height: '64px'}} alt="Expresso tradicional" />
                                    <div>
                                        <h3>{coffe.title}</h3>
                                        <div className="buttonsContainer">
                                            <ManageCart coffe={coffe}/>
                                            <Remove onClick={()=>{removeProductAtCart(coffe.id)}}>
                                                <Trash size={16} />
                                                <span>Remove</span>
                                            </Remove>
                                        </div>
                                    </div>
                                </div>
                                <span>R$ {coffe.price}</span>
                            </CartCoffeContainer>
                            <Divider/>
                        </>        
                    )
                })}
        </>
    )
}
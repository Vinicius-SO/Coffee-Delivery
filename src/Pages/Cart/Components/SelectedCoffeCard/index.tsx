import { CartCoffeContainer, Divider, Remove } from "./styles";
import { coffees } from "../../../../utils/CoffeList";
import { ManageCart } from "../../../../components/ManageCart";
import { Trash } from "phosphor-react";

export function SelectedCoffeCard () {
    const coffe = coffees[0]
    return(
        <>
        
            <CartCoffeContainer>
                <div>
                    <img src={coffe.img} style={{width: '64px', height: '64px'}} alt="Expresso tradicional" />
                    <div>
                        <h3>{coffe.title}</h3>
                        <div className="buttonsContainer">
                            <ManageCart coffe={coffe}/>
                            <Remove>
                                <Trash size={16} />
                                <span>Remove</span>
                            </Remove>
                        </div>
                    </div>
                </div>
                <span>R$ 9,90</span>
           </CartCoffeContainer>
            <Divider/>
        </>
    )
}
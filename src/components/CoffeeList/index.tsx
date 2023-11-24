import { useContext } from "react";
import { CoffeeCard } from "../CoffeCard";
import { CoffeeListContainer } from "./styles";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { coffees } from "../../utils/CoffeList";

export function CoffeeList (){

    // const {} = useContext(ShoppingCartContext
    return(
        <CoffeeListContainer>
            <h2>Nossos Cafés</h2>
            <div>
                {
                    coffees.map(coffe=>{
                        return(
                            <CoffeeCard key={coffe.id}  coffe={coffe}/>
                        )
                    })
                }
               
            </div>

        </CoffeeListContainer>

    )
}
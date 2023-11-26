import { CoffeeCard } from "../CoffeCard";
import { CoffeeListContainer } from "./styles";
import { coffees } from "../../utils/CoffeList";

export function CoffeeList (){


    return(
        <CoffeeListContainer >
            <h2>Nossos Cafés</h2>
            <div  >
                {
                    coffees.map(coffe=>{
                        return(
                            <div key={coffe.id}>
                                <CoffeeCard  coffe={coffe}/>
                            </div>
                        )
                    })
                }
               
            </div>

        </CoffeeListContainer>

    )
}
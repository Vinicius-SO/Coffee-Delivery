import { useCoffee } from "../../hooks/CoffeeList";
import { CoffeeCard } from "../CoffeCard";
import { CoffeeListContainer } from "./styles";

export function CoffeeList (){

    const coffeeList = useCoffee()
    return(
        <CoffeeListContainer>
            <h2>Nossos Cafés</h2>
            <div>
                {
                    coffeeList.map(coffee=>{
                        return(
                            <CoffeeCard coffee={coffee}/>
                        )
                    })
                }
                {/* <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/> */}
            </div>

        </CoffeeListContainer>

    )
}
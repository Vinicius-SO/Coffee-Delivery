import { SelectedCoffeCard } from "../SelectedCoffeCard"
import { TotalValues } from "../TotalValues"
import { CardContainer, ListedCartCoffesContainer } from "./styles"

export const SelectedCoffes = () => {
    return(
        <ListedCartCoffesContainer>
            <h2>Cafés selecionados</h2>
            <CardContainer>
                <SelectedCoffeCard/>
                <TotalValues/>
            </CardContainer>
        </ListedCartCoffesContainer>
    )
}
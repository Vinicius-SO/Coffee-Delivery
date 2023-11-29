import { Header } from "../../components/Header";
import { CheckoutInfos } from "./Components/CheckoutInfos";
import { SelectedCoffes } from "./Components/SelectedCoffes";

export function Cart(){
    return(
        <>
            <Header/>
            <div style={{display: 'flex'}}>
                <CheckoutInfos/>
                <SelectedCoffes/>
            </div>
        </>
    )
}
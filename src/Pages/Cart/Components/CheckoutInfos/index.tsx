import { DeliveryInfos } from "../DeliveryInfos"
import { PaymentInfos } from "../PaymentInfos"
import { CheckoutInfosContainer } from "./styles"

export const CheckoutInfos = () => {
    return (
        <CheckoutInfosContainer>
            <h2>Complete seu Pedido</h2>
            <DeliveryInfos/>
            <PaymentInfos/>
        </CheckoutInfosContainer>
    )
}
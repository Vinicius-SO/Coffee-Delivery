import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { CardsContainer, PaymentCards, PaymentContainer } from "./styles";

export function PaymentInfos () {
    return(
        <PaymentContainer>
            <div>
                <CurrencyDollarSimple size={22}/>
                <div>
                    <span className="title">Pagamentos</span>
                    <span className="description">O pagamento é feito na entrega. Escolha a forma que deseja pagar </span>
                </div>
            </div>

            <CardsContainer>
                <PaymentCards>
                    <CreditCard/>
                    <span>Cartão de Crédito</span>
                </PaymentCards>
                <PaymentCards>
                    <Bank/>
                    <span>Cartão de Debito</span>
                </PaymentCards>
                <PaymentCards>
                    <Money/>
                    <span>Dinheiro</span>
                </PaymentCards>
            </CardsContainer>
        </PaymentContainer>
    )
}
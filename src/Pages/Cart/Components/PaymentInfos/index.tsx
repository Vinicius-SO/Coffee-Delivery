import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { CardsContainer, PaymentCards, PaymentContainer } from "./styles";
import * as RadioGroup from '@radix-ui/react-radio-group';

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
                <RadioGroup.Root defaultValue="credit">
                    <RadioGroup.Item value="credit">
                        <PaymentCards>
                            <CreditCard/>
                            <span>Cartão de Crédito</span>
                        </PaymentCards>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="debit">
                        <PaymentCards>
                            <Bank/>
                            <span>Cartão de Debito</span>
                        </PaymentCards>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="money">
                        <PaymentCards>
                            <Money/>
                            <span>Dinheiro</span>
                        </PaymentCards>
                    </RadioGroup.Item >
                </RadioGroup.Root>
            </CardsContainer>
        </PaymentContainer>
    )
}
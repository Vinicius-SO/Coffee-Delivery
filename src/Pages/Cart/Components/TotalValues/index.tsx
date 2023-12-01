import { useCart } from "../../../../hooks/useCart";
import { TotalContainer } from "./styles";

export function TotalValues () {

    const {getCartSum} = useCart()

    const cartSum = getCartSum()

    const freteValue = 3.33
    
    const intlFormat = new Intl.NumberFormat('pt-BR', {minimumFractionDigits:2})
    return(
        <TotalContainer>
            <div>
                <div>
                    <span>Total de itens</span> 
                    <span>R$ {intlFormat.format(cartSum)}</span>
                </div>
                <div>
                    <span>Entrega</span> 
                    <span>R$ {intlFormat.format(freteValue)}</span>
                </div>
                <div className="strong">
                    <span>Total </span> 
                    <span>R$ {intlFormat.format(freteValue + cartSum)}</span>
                </div>
            </div>
            <button>
                Confirmar Pedido
            </button>
        </TotalContainer>
    )
}
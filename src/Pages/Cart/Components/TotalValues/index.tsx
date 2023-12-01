import { useContext, useEffect, useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { TotalContainer } from "./styles";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

export function TotalValues () {
    const freteValue = 3.33

    const {cart} = useContext(ShoppingCartContext)
    const {getCartSum} = useCart()

    const [cartSum, setCartSum] = useState<number>(0)

    console.log(getCartSum())
    useEffect(()=>{
        setCartSum(getCartSum())
    },[getCartSum()])

    
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
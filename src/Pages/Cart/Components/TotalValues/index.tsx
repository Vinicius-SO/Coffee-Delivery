import { useContext, useEffect, useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { TotalContainer } from "./styles";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function TotalValues () {

    const {cart} = useContext(ShoppingCartContext)

    const showToastMessage = () => {
        toast.success("Success !", {
          className: "toast-message",
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            // theme: "dark",
        });
      };

    const freteValue = 3.33

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
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                // theme="dark"
            />

            <button onClick={showToastMessage}>
                Confirmar Pedido
            </button>
        </TotalContainer>
    )
}
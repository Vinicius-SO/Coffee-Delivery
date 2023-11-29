import { TotalContainer } from "./styles";

export function TotalValues () {
    return(
        <TotalContainer>
            <div>
                <div>
                    <span>Total de itens</span> 
                    <span>R$ 29,80</span>
                </div>
                <div>
                    <span>Entrega</span> 
                    <span>R$ 3,00</span>
                </div>
                <div className="strong">
                    <span>Total </span> 
                    <span>R$ 32,80</span>
                </div>
            </div>
            <button>
                Confirmar Pedido
            </button>
        </TotalContainer>
    )
}
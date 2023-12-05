import { Clock, CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import illustration from "../../assets/Illustration.svg"
import { Circle, SucessContainer } from "./style";

export function Sucess (){
    return(
        <>
            <Header/>
            <SucessContainer>
                <section>
                    <h2>Uhu! Pedido confirmado</h2>
                    <span className="Subtitle">Agora é só aguardar que logo o café chegará até você</span>
                   
                    <div className="container">
                        <div className="wrapper">
                            <Circle color="purple-500">
                                <MapPin weight="fill"/>
                            </Circle>
                            <div>
                                <span>Entrega em <strong>rua João Daniel Martinelli, 102</strong></span>
                                <div>Farrapos - Porto Alegre, RS</div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <Circle color="yellow-500">
                                <Timer weight="fill"/>
                            </Circle>
                            <div>
                                <span>Previsão de entrega</span>
                                <div><strong>20 min - 30 min</strong></div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <Circle color="yellow-800">
                                <CurrencyDollar weight="fill"/>
                            </Circle>
                            <div>
                                <span>Pagamento na entrega</span>
                                <div><strong>Cartão de Crédito</strong></div>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={illustration} alt="" />
            </SucessContainer>
        </>

    )
}
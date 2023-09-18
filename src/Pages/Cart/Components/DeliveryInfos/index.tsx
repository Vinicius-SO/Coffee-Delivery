import { MapPinLine } from 'phosphor-react'

import { DeliveryInfosContainer, FormContainer, Input } from "./styles";


export function DeliveryInfos (){
    return(
        <>
            <DeliveryInfosContainer>
                    <div>
                        <MapPinLine size={22}/>
                        <div>
                            <span className='title'>Endereço de Entrega</span>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>

                    <FormContainer>
                        <Input placeholder='CEP' width={12.5} />

                        <div>
                            <Input placeholder='RUA' />
                        </div>
                        
                        <div>
                            <Input placeholder='Numero' />
                            <Input placeholder='Complemento' />
                        </div>

                        <div>
                            <Input placeholder='Bairro' />
                            <Input placeholder='Cidade' />
                            <Input placeholder='UF' />
                        </div>
                    </FormContainer>
            </DeliveryInfosContainer>   
        </>
    )
}
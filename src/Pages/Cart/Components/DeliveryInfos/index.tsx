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

                        <div style={{display: 'flex', marginTop: '1rem'}}>
                            <Input placeholder='RUA' />
                        </div>
                        
                        <div style={{display: 'flex', gap:'0.75rem', marginTop:'1rem', marginBottom: '1rem'}}>
                            <Input placeholder='Numero' width={12.5} />
                            <Input placeholder='Complemento' />
                        </div>

                        <div style={{display: 'flex', gap:'0.75rem'}}>
                            <Input placeholder='Bairro' width={12.5}/>
                            <Input placeholder='Cidade' />
                            <Input placeholder='UF' width={3.75}/>
                        </div>
                    </FormContainer>
            </DeliveryInfosContainer>   
        </>
    )
}
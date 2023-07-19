import react from 'react'
import { ShoppingCart, Timer, Package, Coffee} from 'phosphor-react'
import { Wrapper } from './styles'

export function DescriptionItem(){
    return(
        <>
            <Wrapper>
                <div className='cart'>
                    <ShoppingCart size={16} weight='fill'/>
                </div>
                <span>Compra simples e segura</span>
            </Wrapper>
        </>
                        
    )
}
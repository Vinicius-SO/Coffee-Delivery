import react, { ReactNode } from 'react'
import * as Phosphor from 'phosphor-react'
import { Cart, Wrapper } from './styles'

interface DescriptionItemProps{
    children: ReactNode
    item : 'shoppingCart'| 'Timer' | 'Package' | 'Coffee'
}


export function DescriptionItem({children,item}:DescriptionItemProps){
    return(
        <>
            <Wrapper>
                    <Cart item={item}>
                        {item === 'shoppingCart' && (<Phosphor.ShoppingCart size={16} weight='fill'/>)} 
                        {item === 'Timer' && (<Phosphor.Timer size={16} weight='fill'/>)} 
                        {item === 'Package' && (<Phosphor.Package size={16} weight='fill'/>)} 
                        {item === 'Coffee' && (<Phosphor.Coffee size={16} weight='fill'/>)} 
                    </Cart>
                <span>{children}</span>
            </Wrapper>
        </>
                        
    )
}
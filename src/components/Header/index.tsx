import { ShoppingCart, MapPin } from 'phosphor-react'

import { HeaderContainer } from "./styles";

import coffeeLogo from '../../assets/Logo.svg'



export function Header (){
    return(
        <HeaderContainer>
            <img src={coffeeLogo} alt="" />
            <div>
                <button className="locale"><MapPin size={22} weight='fill'/> Porto Alegre, RS</button>
                <button className="shopCart"><ShoppingCart size={22} weight='fill'/></button>
            </div>
        </HeaderContainer>
    )
}
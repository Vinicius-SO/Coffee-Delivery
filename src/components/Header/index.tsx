import { ShoppingCart, MapPin } from 'phosphor-react'

import { HeaderContainer } from "./styles";

import coffeeLogo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';



export function Header (){
    return(
        <HeaderContainer>
            <Link to='/'>
                <img src={coffeeLogo} alt="" />
            </Link>
            <div>
                <button className="locale"><MapPin size={22} weight='fill'/> São Paulo, SP</button>
                <Link to='/cart' className="shopCart"><ShoppingCart size={22} weight='fill'/></Link>
            </div>
        </HeaderContainer>
    )
}
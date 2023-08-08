import styled from 'styled-components'

interface CartProps{
    item : 'shoppingCart'| 'Timer' | 'Package' | 'Coffee'
}

export const Wrapper = styled.div`

    display: flex;
    flex-direction: row ;
    align-items: center;
    gap: 12px;

    font-size: 16px;
    font-weight: 130%;
    font-family: 'Roboto';
    color: ${props=>props.theme['gray-700']};

    .cart{
       
    }
    `


    export const Cart = styled.div<CartProps>`
    
        display:flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        border-radius: 50%;
        color:#fff;
        background-color: ${props => {
            let color = '';

            if (props.item === 'shoppingCart') {
                color = 'yellow-800';
            } else if (props.item === 'Timer') {
                color = 'yellow-500';
            } else if (props.item === 'Package') {
                color = 'gray-700';
            } else if (props.item === 'Coffee') {
                color = 'purple-500';
            }
            
            return props.theme[color] || ''; // Retornar a cor do tema ou uma string vazia se a cor não for encontrada
        }};
        height: 32px;
        width: 32px;

       
    
        svg{
            width: 16px;
            height: 16px;
        }
    `

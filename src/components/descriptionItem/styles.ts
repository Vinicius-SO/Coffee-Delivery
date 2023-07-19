import styled from 'styled-components'

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
        display:flex;
        align-items: center;
        justify-content: center;
        /* flex-direction: column; */
        border-radius: 50%;
        color:#fff;
        background-color: ${props => props.theme['yellow-800']};
        height: 32px;
        width: 32px;
        svg{
            width: 16px;
            height: 16px;
        }
    }
    `
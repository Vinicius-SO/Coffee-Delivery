import styled from "styled-components";

export const ListedCartCoffesContainer = styled.div`
    margin: 4.56rem 0 0 2rem;
    
    h2{
        color: ${props=> props.theme['gray-800']};

        /* Title/Title XS */
        font-family: 'Baloo 2', 'cursive';
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 1.4625rem */
    }
`

export const CardContainer = styled.article`
    display: flex;
    width: 28rem;
    margin-top: 0.94rem ;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    border-radius: 0.375rem 2.75rem;
    background: ${props=> props.theme['gray-100']};

    .buy{
        display: flex;
        height: 2rem;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;

        border-radius: 0.375rem;
        background: ${props=> props.theme['gray-400']};

        svg{
            color: ${props=>props.theme['purple-500']};
            background: ${props=> props.theme['gray-400']};

        } 

    }

`
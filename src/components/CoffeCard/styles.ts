import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    margin-top: 3.75rem;

    border-radius: 0.375rem 2.25rem;
    background: ${props => props.theme['gray-100']};

    display: flex;
    flex-direction: column;
    
    align-items: center;

    img{
        margin-top: -1.25rem;
        display:'inline-block'
    }

    .type{
        display: flex;
        padding: 0.25rem 0.5rem;
        justify-content: center;
        align-items: center;


        margin: 1rem 0 1.25rem 0;

        border-radius: 6.25rem;
        background: ${props => props.theme['yellow-200']};

        color: ${props => props.theme['yellow-800']};

        /* Components/Tag */
        font-family: Roboto;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 0.8125rem */
        text-transform: uppercase;

    }

    h3{
        color: ${props => props.theme['gray-800']};
        text-align: center;
        margin: 0 1.25rem;

        /* Title/Title S */
        font-family: 'Baloo 2', 'cursive';
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 1.625rem */
    }

    .description{
        width: 13.5rem;
        color: ${props => props.theme['gray-600']};
        text-align: center;

        margin: 0.5rem 0 2.06rem 0;

        /* Text/Regular S */
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */
    }
 
`

export const BuyContainer = styled.div`
    display: flex;
    align-items: center;

    /* margin-bottom: 2rem; */
    
    .buy{
        margin:0 0.5rem 0 1.44rem ;
        display: flex;
        /* height: 2.375rem; */
        padding: 0.5rem;
        justify-content: center;
        align-items: center; 
        gap: 0.25rem;

        border-radius: 0.375rem;
        background: ${props=> props.theme['gray-400']};

        svg{
            color: ${props=>props.theme['purple-500']};
        } 

    }

    .cart{
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        border-radius: 0.375rem;
        background: ${props=>props.theme['purple-800']};
        color: ${props=>props.theme['gray-100']};
    }

    & > span{
        color: ${props=> props.theme['gray-700']};
        text-align: right;
        /* Text/Regular S */
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */

        & > span{
            margin-left:.25rem;

            color: ${props=> props.theme['gray-700']};

            font-family: 'Baloo 2', 'cursive';
            font-size: 1.5rem;
            font-weight: 800;
        }
    }
`
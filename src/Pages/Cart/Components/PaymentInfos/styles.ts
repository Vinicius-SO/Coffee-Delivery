import styled from "styled-components";

export const PaymentContainer = styled.div`
     display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    margin-bottom: 10rem;

    border-radius: 0.375rem;
    background: ${props => props.theme['gray-100']};


    div:first-child{
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    svg{
        color: ${props=> props.theme['purple-500']};
    }

    .title{
        color: ${props=>props.theme['gray-800']};
        /* Text/Regular M */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */

        /* text-align: ; */
        display: block;
    }
    .description{
        color: ${props=>props.theme['gray-700']};
        /* Text/Regular S */
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */
    }
`
export const CardsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    width: 100%;
`

export const PaymentCards = styled.button`
    display: flex;
    padding: 1rem;
    align-items: center;
    width: 11.16669rem;
    gap: 0.75rem;
    flex: 1 0 0;

    background: ${props=> props.theme['gray-400']};
    border: 1px solid ${props=>props.theme['gray-400']};

    border-radius: 0.375rem;

    span{
        font-family: Roboto;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 1.2rem */
        text-transform: uppercase;
        color: ${props=> props.theme['gray-700']};
    }

    RadioGroupItem:focus{
        background: ${props=>props.theme['purple-200']};
        border: 1px solid ${props=>props.theme['purple-500']};
        cursor: pointer;
    }

    &:hover{
        background: ${props=>props.theme['gray-500']};
        /* border: 1px solid ${props=>props.theme['purple-500']}; */
        cursor: pointer;
    }
    &:focus{
        background: ${props=>props.theme['purple-200']};
        border: 1px solid ${props=>props.theme['purple-500']};
        cursor: pointer;
    }
`
import styled from "styled-components";

export const CartCoffeContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    width: 100%;

    div:first-child{
        display: flex;
        gap: 1.25rem;
    }

    &>span{
        color: ${props=>props.theme['gray-700']};
        text-align: right;
        /* Text/Bold M */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 1.3rem */
    }

    h3{
        color: ${props=>props.theme['gray-800']};
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
    }

    .buttonsContainer{
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;

        div{
            margin-right: 0.5rem;
            button{
                background: none;
                display: flex;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`

export const Remove = styled.button`
    display: flex;
    height: 2rem;
    padding: 0rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    
    /* Components/Button S */
    font-family: Roboto;
    font-size: 0.75rem;
    line-height: 160%; /* 1.2rem */
    text-transform: uppercase;
    color: ${props=> props.theme['gray-700']};


    background: ${props=>props.theme['gray-400']};
    border-radius: 0.375rem;

    svg{
        color: ${props=> props.theme['purple-500']};
    }

    &:hover{
        cursor: pointer;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1.5rem;
    border-bottom: 1px solid ${props=>props.theme['gray-400']};

    margin-bottom: 1.5rem;
`
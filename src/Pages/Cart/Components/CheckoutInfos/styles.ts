import styled from "styled-components";

export const CheckoutInfosContainer = styled.div`
    display: flex;
    width: 40rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    margin-top: 4.56rem;

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
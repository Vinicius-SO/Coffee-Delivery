import styled from "styled-components";

export const CoffeeListContainer = styled.div`

padding-bottom: 10rem;
    h1{
        font-family: 'Baloo 2', cursive;
    }

    &>div{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;
    }
`
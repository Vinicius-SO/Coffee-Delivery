import styled from "styled-components";

export const TotalContainer = styled.section`
    display: flex;
    width: 100%;
    /* padding: 2.5rem; */
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    align-self: stretch;
    div{
        width:100%;
    }
    div>div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
        font-family: Roboto;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${props=> props.theme['gray-700']};
    }

    .strong{
        color: ${props=> props.theme['gray-800']};
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 130%; /* 1.625rem */
    }

    button{
        width: 100%;
        padding: 0.725rem 0.5rem;
        background: ${props=>props.theme['yellow-500']};
        border-radius: 0.375rem;

        font-family: Roboto;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 160%; /* 1.4rem */
        text-transform: uppercase;
        color: ${props=> props.theme.white};

        &:hover{
            background: ${props=>props.theme['yellow-800']};

        }
    }
`
import styled from "styled-components";


interface InputProps {
    Width?: number
}

export const DeliveryInfosContainer = styled.section`

    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    margin-bottom: 0.75rem;

    border-radius: 0.375rem;
    background: ${props => props.theme['gray-100']};

    div:first-child{
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    svg{
        color: ${props=> props.theme['yellow-800']};
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

    span:last-child{
        color: ${props=>props.theme['gray-700']};
        /* Text/Regular S */
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */
    }

`
export const Input = styled.input<InputProps>`
    display: flex;
    padding: 0.75rem;
    align-items: center;
    gap: 0.25rem;display: flex;
    width: ${props=> {

        if(props.width){
            return 'props.width rem' 
        }else{
            return '100%'
        }}
    };
    width: ${props=> props.width}rem;
    padding: 0.75rem;
    align-items: center;
    gap: 0.25rem;

    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme['gray-400']};
    background: ${props => props.theme['gray-300']};

    &:placeholder{
      color: ${props=>props.theme['gray-600']} ;
    }
    div{
        display: flex;
    }

`



export const FormContainer = styled.div`
    width: 100%;
`
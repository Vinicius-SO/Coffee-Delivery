import styled from "styled-components";

type circleProps = {
    color: 'yellow-500' | 'purple-500' | 'yellow-800'

}

export const SucessContainer = styled.article`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    h2{
        color: ${props=>props.theme['yellow-800']};
        /* Title/Title L */
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 0.25rem;

    }
    
    .subtitle{
        color: var(--base-subtitle, #403937);
        /* Text/Regular L */
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
    }

    .container{
        display: flex;
        width: 32.875rem;
        padding: 2.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        margin-top: 2.5rem;
        

        border-radius: 0.375rem 2.25rem;
        border: 1px solid #DBAC2C;
    }


    .wrapper{
        display: flex;
        align-items: center;
        
    }

   
`


export const Circle= styled.div<circleProps>`

    width: 2.25rem;
    height: 2rem;
    border-radius: 100%;
    background: ${props=>props.theme[props.color]};
    color: ${props=>props.theme.white};

    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom:.2rem ;
    margin-right: .75rem;
`
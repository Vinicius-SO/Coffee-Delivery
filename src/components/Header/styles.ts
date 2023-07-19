import styled from "styled-components";

export const HeaderContainer = styled.header`

    img{
        width: fit-content;
        height: fit-content;
    }
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: row;
        gap: 12px;
    }

    .locale{
        display: flex;
        align-items: center;
        
        padding: .5rem;
        background: ${(props)=> props.theme['purple-200']};
        border-radius: 6px;
        
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 130%;
        font-weight: 400;
        gap: .250rem;

        color: ${props=> props.theme['purple-800']};

        svg{
            color: ${(props)=> props.theme['purple-500']};
        }
    }

    .shopCart{
        padding: 0.5rem;
        background: ${props=> props.theme['yellow-200']};
        
        border-radius: 6px;
        svg{
            color: ${props => props.theme['yellow-500']};
        }
    }
    
`
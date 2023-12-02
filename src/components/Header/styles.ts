import styled from "styled-components";

export const HeaderContainer = styled.header`

    img{
        width: fit-content;
        height: fit-content;
    }
    position: relative;
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
            color: ${props => props.theme['yellow-800']};
        }
    }

    .floatNumber {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme['yellow-800']};

    color: ${({theme}) => theme.white};

    text-align: center;
    /* Text/Bold S */
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 0.975rem */
    letter-spacing: -0.045rem;

    border-radius: 50%;
  }
    
`
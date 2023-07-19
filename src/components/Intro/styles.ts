import styled from "styled-components";

export const HomeContainer = styled.div`

    height: 554px;

    display: flex;
    gap: 56px;
    align-items: center;
    justify-content: center;

    img{
        width: 476px;
        height: 360px;
    }

   .itens{
        display: flex;
        gap: 40px;
   }
   .itens > div div:last-child{
        margin-top:20px;
   }


    .title{
        width: 588px;
        margin-bottom: 66px;
        h1{
            font-family: 'Baloo 2', cursive;
            font-size: 48px;
            line-height: 130%;
            margin-bottom: 1rem;
        }
        span{
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            line-height: 130%;
        }
    }

`

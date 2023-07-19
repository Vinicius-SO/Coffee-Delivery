import CoffeeImg from '../../assets/Imagem.svg'
import { DescriptionItem } from '../descriptionItem'
import { HomeContainer } from './styles'

export function Intro(){
    return(
        <>
            <HomeContainer>
                <div>
                    <div className="title">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </div>
                    <div className="itens">
                        <div>
                            <DescriptionItem />
                            <DescriptionItem />
                        </div>
                        <div>
                            <DescriptionItem />
                            <DescriptionItem />
                        </div>
                    </div>
                </div>

                <img src={CoffeeImg} alt="Coffee Image" />
            </HomeContainer>
        </>
    )
}
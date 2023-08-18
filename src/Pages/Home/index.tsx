import { CoffeeList } from "../../components/CoffeeList";
import { Header } from "../../components/Header";
import { Intro } from "../../components/Intro";

export function Home(){
    return(
        <>
            <Header/>
            <Intro/>
            <CoffeeList/>
        </>
    )
}
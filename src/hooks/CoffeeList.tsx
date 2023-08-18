
import expresso from '../assets/coffee/Type=Expresso.svg'
import americano from '../assets/coffee/Type=Americano.svg'
import cremoso from '../assets/coffee/Type=Expresso Cremoso.svg'
import gelado from '../assets/coffee/Type=Café Gelado.svg'
import comLeite from '../assets/coffee/Type=Café com Leite.svg'
import capuccino from '../assets/coffee/Type=Capuccino.svg'
import chocolate from '../assets/coffee/Type=Chocolate Quente.svg'
import cubano from '../assets/coffee/Type=Cubano.svg'
import havaino from '../assets/coffee/Type=Havaiano.svg'
import irlandes from '../assets/coffee/Type=Irlandês.svg'
import machiato from '../assets/coffee/Type=Macchiato.svg'
import mochaccino from '../assets/coffee/Type=Mochaccino.svg'
import latte from '../assets/coffee/Type=Latte.svg'
import árabe from '../assets/coffee/Type=Árabe.svg'

interface CoffeeList{
    title: string
    description: string
    type: string[]
    price: number
    img: string

}


export function useCoffee (){
    const coffeeList:CoffeeList[]    = [
        {
            title: 'Expresso Tradicional',
            description:'O tradicional café feito com água quente e grãos moídos',
            type: ['tradicional'],
            price: 9.90,
            img:expresso
        },
        {
            title: 'Expresso Americano',
            description:'Expresso diluído, menos intenso que o tradicional',
            type: ['tradicional'],
            price: 9.90,
            img:americano

        },
        {
            title: 'Expresso Cremoso',
            description:'Café expresso tradicional com espuma cremosa',
            type: ['tradicional'],
            price: 9.90,
            img:cremoso

        },
        {
            title: 'Expresso Gelado',
            description:'Bebida preparada com café expresso e cubos de gelo',
            type: ['tradicional', 'gelado'],
            price: 9.90,
            img:gelado
        },
        {
            title: 'Café com leite',
            description:'Meio a meio de expresso tradicional com leite vaporizado',
            type: ['tradicional', 'com leite'],
            price: 9.90,
            img:comLeite
        },
        {
            title: 'Latte',
            description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            type: ['tradicional', 'com leite'],
            price: 9.90,
            img:latte
        },
        {
            title: 'Capuccino',
            description:'Bebida com canela feita de doses iguais de café, leite e espuma',
            type: ['tradicional', 'com leite'],
            price: 9.90,
            img:capuccino
        },
        {
            title: 'Macchiato',
            description:'Café expresso misturado com um pouco de leite quente e espuma',
            type: ['tradicional', 'com leite'],
            price: 9.90,
            img:machiato
        },
        {
            title: 'Mocaccino',
            description:'Café expresso com calda de chocolate, pouco leite e espuma',
            type: ['tradicional', 'com leite'],
            price: 9.90,
            img:mochaccino
        },
        {
            title: 'Chocolate Quente',
            description:'Bebida feita com chocolate dissolvido no leite quente e café',
            type: ['especial', 'com leite'],
            price: 9.90,
            img:chocolate
        },
        {
            title: 'Cubano',
            description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
            type: ['especial', 'alcoólico' ,'gelado' ],
            price: 9.90,
            img:cubano
        },
        {
            title: 'Havaiano',
            description:'Bebida adocicada preparada com café e leite de coco',
            type: ['especial'],
            price: 9.90,
            img:havaino
        },
        {
            title: 'Árabe',
            description:'Bebida preparada com grãos de café árabe e especiarias',
            type: ['especial'],
            price: 9.90,
            img:árabe
        },
        {
            title: 'Irlandês',
            description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            type: ['especial','alcoólico'],
            price: 9.90,
            img:irlandes
        },
    ]

    
    
    return coffeeList
}
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

// import {v4 as uuid } from 'uuid'
export type CoffeType ={
    id:number
    title: string
    description: string
    type: string[]
    price: number
    img: string
}

export const coffees:CoffeType[] = [
    {
        id:0,
        title: 'Expresso Tradicional',
        description:'O tradicional café feito com água quente e grãos moídos',
        type: ['tradicional'],
        price: 9.90,
        img:expresso,
    },
    {
        id:1,
        title: 'Expresso Americano',
        description:'Expresso diluído, menos intenso que o tradicional',
        type: ['tradicional'],
        price: 9.90,
        img:americano,

    },
    {
        id:2,
        title: 'Expresso Cremoso',
        description:'Café expresso tradicional com espuma cremosa',
        type: ['tradicional'],
        price: 9.90,
        img:cremoso,
    },
    {
        id:3,
        title: 'Expresso Gelado',
        description:'Bebida preparada com café expresso e cubos de gelo',
        type: ['tradicional', 'gelado'],
        price: 9.90,
        img:gelado,
    },
    {
        id:4,
        title: 'Café com leite',
        description:'Meio a meio de expresso tradicional com leite vaporizado',
        type: ['tradicional', 'com leite'],
        price: 9.90,
        img:comLeite,
    },
    {
        id:5,
        title: 'Latte',
        description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        type: ['tradicional', 'com leite'],
        price: 9.90,
        img:latte,
    },
    {
        id:6,
        title: 'Capuccino',
        description:'Bebida com canela feita de doses iguais de café, leite e espuma',
        type: ['tradicional', 'com leite'],
        price: 9.90,
        img:capuccino,
    },
    {
        id:7,
        title: 'Macchiato',
        description:'Café expresso misturado com um pouco de leite quente e espuma',
        type: ['tradicional', 'com leite'],
        price: 9.90,
        img:machiato,
    },
    {
        id:8,
        title: 'Mocaccino',
        description:'Café expresso com calda de chocolate, pouco leite e espuma',
        type: ['tradicional', 'com leite'],
        price: 9.90,
        img:mochaccino,
    },
    {
        id:9,
        title: 'Chocolate Quente',
        description:'Bebida feita com chocolate dissolvido no leite quente e café',
        type: ['especial', 'com leite'],
        price: 9.90,
        img:chocolate,
    },
    {
        id:10,
        title: 'Cubano',
        description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        type: ['especial', 'alcoólico' ,'gelado' ],
        price: 9.90,
        img:cubano,
    },
    {
        id:11,
        title: 'Havaiano',
        description:'Bebida adocicada preparada com café e leite de coco',
        type: ['especial'],
        price: 9.90,
        img:havaino,
    },
    {
        id:12,
        title: 'Árabe',
        description:'Bebida preparada com grãos de café árabe e especiarias',
        type: ['especial'],
        price: 9.90,
        img:árabe,
    },
    {
        id:13,
        title: 'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        type: ['especial','alcoólico'],
        price: 9.90,
        img:irlandes,
    },
]
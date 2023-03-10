import { describe, it,expect } from "vitest";
import getPokemonOptions,{getPokemons,getPokemonNames} from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers',() => {
    it('debe de regresar un arreglo de numeros',() =>{
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
    })
    it('debe de retornar un arreglo de 4 elementos con nombres de pokemones',async() =>{
        const pokemons = await getPokemonNames([1,2,3,4])
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
        console.log(pokemons)
    })
    it('getPokemonOptions debe de retomar un arreglo mezclado',async()=>{
        const pokemons = await getPokemonOptions()
        //console.log(pokemons)
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name:expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            },
            {
                name:expect.any(String),
                id:expect.any(Number)
            }
        ])
    })
})
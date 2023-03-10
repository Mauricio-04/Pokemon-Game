import { describe, expect, it,beforeEach, vitest } from "vitest";
import PokemonPage from '@/pages/PokemonPage.vue'
import { shallowMount } from "@vue/test-utils";
describe('PokemonPage Component',() =>{
    let wrapper
    let mixPokemonArraySpy
    beforeEach(()=> {
        mixPokemonArraySpy = vitest.spyOn(PokemonPage.methods,'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)
    })
    it('debe de hacer match con el snapshot',() =>{
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('debe de llamar mixPokemonArray al montar',() =>{
       expect(mixPokemonArraySpy).toHaveBeenCalled()
    })
    it('debe de hacer match con el snapshot cuando cargan los pokemons',() =>{
        const wrappper = shallowMount(PokemonPage, {
            data() {
                return{
                pokemonArr:pokemons,
                pokemon:pokemons[0],
                showPokemon:false,
                showAnswer:false,
                message:'',

                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})
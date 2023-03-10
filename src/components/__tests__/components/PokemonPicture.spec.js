import { shallowMount } from "@vue/test-utils";
import PokemonPicture from '@/components/PokemonPicture.vue'
import { describe, expect, it } from "vitest";

describe('PokemonPicture component',() =>{
    it('debe de hacer match con el snapshot',() =>{
        const wrapper = shallowMount(PokemonPicture,{
            props:{
                pokemonId:1,
                showPokemon:false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('debe de mostrar la imagen oculta y el pokemon 100',() =>{
        const wrapper = shallowMount(PokemonPicture,{
            props:{
                pokemonId:100,
                showPokemon:false
            }
        })
        const [img1,img2] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        //expect(img2).toBe('undefined')
        expect(img1.classes('hidden-pokemon')).toBe(true)
    })
    it('debe de mostrar el pokemonsi showPokemon:true',() =>{
        const wrapper = shallowMount(PokemonPicture,{
            props:{
                pokemonId:100,
                showPokemon:true
            }
        })
        const img1 = wrapper.find('img')
        expect(img1.exists()).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBe(true)
    })
})


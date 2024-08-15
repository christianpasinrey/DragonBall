import { CHARACTERS_URL, PLANETS_URL } from "./routes";
import axios from "axios";

export const DbApi = (()=>{
    const getCharacters = async ()=>{
        const response = await axios.get(CHARACTERS_URL);
        return response;
    }

    const getCharacter = async (id:number)=>{
        const response = await fetch(`${CHARACTERS_URL}/${id}`);
        const character = await response.json();
        return character;
    }

    const filterCharacters = async (params:URLSearchParams)=>{
        const response = await fetch(`${CHARACTERS_URL}?${params.toString()}`);
        const characters = await response.json();
        return characters;
    }

    const getPlanets = async ()=>{
        const response = await fetch(PLANETS_URL);
        const planets = await response.json();
        return planets;
    }

    const getPlanet = async (id:number)=>{
        const response = await fetch(`${PLANETS_URL}/${id}`);
        const planet = await response.json();
        return planet
    }

    const filterPlanets = async (params:URLSearchParams)=>{
        const response = await fetch(`${PLANETS_URL}?${params.toString()}`);
        const planets = await response.json();
        return planets;
    }

    return {
        getCharacters,
        getCharacter,
        filterCharacters,
        getPlanets,
        getPlanet,
        filterPlanets
    }
})
import { useState } from 'react';
import { useEffect } from 'react'
import { getNRandomPokemons } from '../adapters/PokemonClient';
import PokemonCard from '../components/PokemonCard';
import { TitleBar } from '../components/TitleBar'

export const Dashboard = () => {
    const count = 15;
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getNRandomPokemons(count).then(data=>{
            setPokemons(data.data)
        });
    }, []);

    return (
        <>
            <TitleBar />
            <div style={{marginTop: 80}}>
                {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} />)}
            </div>
        </>
    )
}
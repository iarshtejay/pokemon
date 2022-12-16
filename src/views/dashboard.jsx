import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react'
import { getNRandomPokemons } from '../adapters/PokemonClient';
import PokemonCard from '../components/PokemonCard';
import PokemonModal from '../components/PokemonModal';
import { TitleBar } from '../components/TitleBar'

export const Dashboard = () => {
    const [pokemons, setPokemons] = useState([]);
    const [noOfPokemons, setNoOfPokemons] = useState(5);
    const [selectedPokemon, setSelectedPokemon] = useState({})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        getNRandomPokemons(noOfPokemons)
            .then(res => {
                setPokemons(res.map(resItem => resItem.data))
            });
    }, [noOfPokemons]);

    return (
        <div style={{ marginTop: "5em" }}>
            <TitleBar />
            <div style={{display:"flex", justifyContent:"center", gap:"0.5em"}}>
                <TextField
                    id="number-pokemons"
                    label="Number Of Pokemons" variant="standard"
                    type="number" value={noOfPokemons}
                    InputProps={{ inputProps: { min: 1 } }}
                    onChange={e => setNoOfPokemons(e.target.value)} />
                <Button variant="contained" onClick={() => setNoOfPokemons(5)}>Reload</Button>
            </div>
            <div style={{ marginTop: "2em", display: "flex", flexWrap: "wrap", gap: "2em", justifyContent: "center", alignItems: "center" }}>
                {pokemons.map(pokemon => {
                    return (
                        <div onClick={() => {
                            setOpen(true)
                            setSelectedPokemon(pokemon)
                        }}>
                            <PokemonCard
                                pokemon={pokemon}
                            />
                        </div>)
                })}
            </div>
            <PokemonModal
                open={open}
                setOpen={setOpen}
                selectedPokemon={selectedPokemon}
            />
        </div>
    )
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokemonCard(props) {
    const pokemon_ = Object.keys(props.pokemon).length === 0?undefined:props.pokemon;
    const pokemon = pokemon_ || {
    name: "clefairy",
    height: 6,
    weight: 145,
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
      "front_shiny_female": null,
      "other": {
        "dream_world": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
          "front_female": null
        },
        "home": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png",
          "front_shiny_female": null
        },
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
        }
      }}
  }

  return (
    <Card sx={{ maxWidth: 200, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name||'Pikachu'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <b>Height</b> {pokemon.height}<br/>
           <b>Weight</b> {pokemon.weight}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

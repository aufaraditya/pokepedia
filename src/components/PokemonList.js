import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function PokemonList({pokemonsURL}){

    const[pokemons, setPokemons] = useState([]);
    
      useEffect(() =>{
        componentDidMount();
      }, [pokemons]);
    
    const componentDidMount = () => {
        const requests = [];
        pokemonsURL.map(n=> requests.push(
            // fetch(n).then(response => response.json())
            axios.get(n)
        ))
            Promise.all(requests).then((arrayWithData) => {
               
                setPokemons(arrayWithData)
                });
              }
    
              function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }

    return (
        <div id="content">
            <Row xs={2} md={4} className="g-4">
                {pokemons.map(p => (
                    <Col>
                    <Card bg={p.data.types[0].type.name} border={p.data.types[1] == null ? p.data.types[0].type.name : p.data.types[1].type.name}>
                        <Card.Img id="pokemonimage" variant="top" src={p.data.sprites.other.dream_world.front_default} />
                        <Card.Header className="text-center" >#{p.data.id}</Card.Header>
                        <Card.Title  className="text-center">{capitalizeFirstLetter(p.data.name)}</Card.Title>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );

}

export default PokemonList;
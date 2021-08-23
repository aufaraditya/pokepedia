// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import NavbarTop from './components/NavbarTop';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';


function App() {
  
  const[pokemonsURL, setPokemonsURL] = useState([]); 
  const[prevPageURL, setPrevPageURL] = useState();
  const[nextPageURL, setNextPageURL] = useState();
  const[currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon');
  const[loading, setLoading] = useState(true);
  const[inputText, setInputText] = useState("");
  const[filter,setFilter] = useState("All");

  useEffect(() =>{
    setLoading(true)
    if (filter == 'All') {
    axios.get(currentPageURL).then(res =>{
      setLoading(false)
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      setPokemonsURL(res.data.results.map(p=>p.url))
    })} else {
      axios.get(currentPageURL).then(res =>{
        setLoading(false)
        const why = [];
        res.data.pokemon.map(p=> why.push(p.pokemon))
        setNextPageURL('')
        setPrevPageURL('')
        setPokemonsURL(why.map(p=>p.url))
    })}
  }, [currentPageURL]);

  function goToNextPage() {
    setCurrentPageURL(nextPageURL);
  }

  function goToPrevPage(){
    setCurrentPageURL(prevPageURL);
  }

  if (loading) return 'Loading...'
  
  return (
    <div className="App">
      <NavbarTop 
      currentPageURL = {currentPageURL} 
      setCurrentPageURL = {setCurrentPageURL}
      inputText={inputText}
      setInputText={setInputText} 
      filter={filter}
      setFilter={setFilter}/>
      <PokemonList 
      pokemonsURL = {pokemonsURL}/>
      <Pagination 
        goToNextPage = {nextPageURL ? goToNextPage : null}
        goToPrevPage = {prevPageURL ? goToPrevPage: null}
      />
    </div>
  );
}

export default App;

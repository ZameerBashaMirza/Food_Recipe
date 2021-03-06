import React, { useEffect,useState } from 'react';
import Recipe from './Recipe';

const App=()=>{

  const APP_ID='38ec2a0d';
  const APP_KEY='f555ab59c8014e54545b5d36f87209ed';
  
const[recipes,setRecipes]=useState([]);
  const [counter, setCounter]=useState(0);
  const [search,setSearch]=useState();
  const[query,setQuery]=useState('chicken');

  useEffect(()=>{
    console.log('Effect has been run');
    getRecipes();
    console.log('lets say we are fetching data');
  },[query]);

const getRecipes=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await response.json();
  
  setRecipes(data.hits);
  console.log(data.hits);

  };

  const updateSearch = e=>{
    setSearch(e.target.value);
 
  };

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return(
    <div className="App">
     
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='search-button'type='submit'>Search</button>
      </form>
      <div className="recipies"> 
      {recipes.map(recipe =>(
<Recipe 
hey={recipe.recipe.label}
title={recipe.recipe.label}
calories={recipe.recipe.calories}
image={recipe.recipe.image}
ingredients={recipe.recipe.ingredients}
 />
))}
 </div>
    </div>
  );
}
export default App;
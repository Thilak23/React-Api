import React, { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {

  const[name,setName] = useState();
  const[poke,setPoke] = useState({
    name: '',
    img: '',
    type: '',
    species: '',
  })


  const searchPoke = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
      console.log(1);
      setPoke({
        name: name,
        img: res.data.sprites.front_default,
        type: res.data.types[0].type.name,
        species: res.data.species.name,
      })
    }).catch((err)=>{
      window.alert(err);
    })
  }   

  return (
    <div className="good">
      <div className="poke">
        <div>
          <h1>Pokemon</h1>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <button onClick={searchPoke}>Search</button>
        </div>
      </div>

      <div className="list">
        <h1>Name : {poke.name}</h1>
        <img src={poke.img} alt={poke.name} />
        <h2>Type: {poke.type}</h2>
        <h2>Species: {poke.species}</h2>
     </div>
    </div>
    
  )
}

export default App

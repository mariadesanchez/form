import React from 'react'
import { useState } from 'react'
import imgpokemon from '../assets/pokemon.png'
import imgpizza from '../assets/pizza_de_mozzarella.jpg'


const Form = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [pokemon, setPokemon] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(nombre.length > 3 && edad >= 18 && pokemon.length >= 3  ) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
        
    }

  return (
    <div style={{width:'64em'}}>
    
      <img src={imgpokemon} alt="Pokemon Favorito" />
    

        <form onSubmit={handleSubmit}>
            <label style={{marginTop:'2em',paddingTop:'2em'}}>Nombre y Apellido: </label><br/>
            <input type="text" disabled={show} onChange={(event) => setNombre(event.target.value)} /><br/>
            <label >Edad: </label><br/>
            <input type="text" disabled={show} onChange={(event) => setEdad(event.target.value)}/><br/>
            <label >Pokemon Favorito: </label><br/>
            <input type="text" disabled={show} onChange={(event) => setPokemon(event.target.value)}/><br/>
            
            <button style={{marginTop:'2em'}}>Registrar</button><br/><br/>
            {error && 'Verifique bien su información'}
            {show ? 
            <>
                <h3 style={{fontSize:'1em'}}>Muchas gracias, {nombre}!</h3>
                <h3 style={{fontSize:'1em'}}>Seleccionaste el Pokemon {pokemon}.</h3>
            </>
            :
            null
        }
        </form>

     

        {/* {Condicion ? Resultado true : Resultado false} */}
        {/* {Condicion && Resultado true} */}
    </div>
  )
}

export default Form
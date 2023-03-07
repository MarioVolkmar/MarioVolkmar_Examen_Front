import React, { useState } from 'react'
import CardCorrecta from './CardCorrecta'
import CardIncorrecta from './CardIncorrecta'

const Forms = () => {
    const [usuario, setUsuario]= useState({
        nombre:'',
        color:'',
    })

    const [show, setShow]= useState(false)

    const renderizarSubmit = (event) =>{
        event.preventDefault()
        setShow(true)
    }

    const seleccionarTarjeta = () =>{
        if(usuario.nombre.length >= 3 && usuario.nombre.trim().length == usuario.nombre.length && usuario.color.length >= 6) return <CardCorrecta nombre={usuario.nombre} color ={usuario.color}/>
        else return <CardIncorrecta/>
    }
    
    return (
    <>
        <form onSubmit={renderizarSubmit}>
            <label>Cual es tu nombre</label>
            <input type="text" value={usuario.nombre} onChange={(event)=> setUsuario({...usuario, nombre: event.target.value})} />
            <label>Dime tu color favorito </label>
            <input type="text" value={usuario.color} onChange={(event)=> setUsuario({...usuario, color: event.target.value})} />
            <button onClick={seleccionarTarjeta}>Enviar</button>
        </form>
        {
        show
        ?
        seleccionarTarjeta():null
        }
    </>
    )
}

export default Forms
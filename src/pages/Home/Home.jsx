import React, { useState } from 'react';
import './home.css'

function Home() {

  let [email, setEmail] = useState("")

  const formSend = (ev) => {
    ev.preventDefault()
    
    if(email === "wesleyramox") {
      alert("Logado")
    } else {
      alert("Errado")
    }
  }

  const getEmail = (ev) => {
    setEmail(
      ev.target.value
    )
  }


  // if(email === "wesleyramox") {
  //   alert("Entrou!")
  // } else {
  //   alert("Email incorreto")
  // }
  
  return (
    <div className='main'>
      <div className="content">
        <h1>Home</h1>
        <form>
          <input type="text" onChange={getEmail}></input>
          <input type="submit" onClick={formSend} value="Enviar" />
          <p>{email}</p>
        </form>
      </div>
    </div>
  )
}

export default Home

import React from 'react'

function App() {
  const [saudacao,setSaudacao] = React.useState('')
  function verificaHora(){
    let date = new Date()
    date =  date.getHours()
    if(date>=4 && date<=11){setSaudacao('Bom dia')}
    if(date>11 && date<18){setSaudacao('Boa tarde')}
    if(date>=18){setSaudacao('Boa noite')}
    console.log(saudacao)
  }
  return (
    <div>
        <h1>{saudacao}</h1>
        <button onClick={verificaHora}>Saudar</button>
    </div>
  )
}

export default App
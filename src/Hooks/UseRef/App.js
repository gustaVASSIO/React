import React from 'react'

function App() {
    const [carrinho, setCarrinho] = React.useState(0)
    const [notificacao,setNotificacao] = React.useState(null)
    const timeouRef = React.useRef()
    function handleClick(){
        
        setCarrinho(carrinho+1)
        setNotificacao('Item adicionado')
        clearTimeout(timeouRef.current)
        timeouRef.current =  setTimeout(()=>setNotificacao(null),2000)
    }
    return (
        <div>
        <p>{notificacao}</p>
        <button onClick={handleClick}>Adicionar carrinho: {carrinho}</button>
    </div>
  )
}

export default App
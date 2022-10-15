import React from 'react'
import Produto from './Produto'

function App() {
const [modal, setModal] = React.useState(false)


    return (
    
    <div>
        {modal && <Produto />}
        <button onClick={()=>setModal(!modal)}>Modal</button>
    </div>
  )
}

export default App
import React from 'react'

function Modal({modal, setModal}) {
if(modal)    
    return (
    <div>
        Esse é o Modal
        <button onClick={()=>setModal(false)}>Fechar</button>
    </div>
  )
return null  
}

export default Modal
import React, { useState } from "react";
import Produto from "./Produto";

function App() {
 
  const [preferencia,setPreferencia] = useState(null)
  function handleCLick(e){
    setPreferencia(e.target.innerText)
  }
  React.useEffect(()=>{
   
    if(window.localStorage.getItem('produto')!==null){
      setPreferencia(window.localStorage.getItem('produto'))
    }

  },[])
  React.useEffect(()=>{
    if(preferencia!==null){ window.localStorage.setItem('produto',preferencia)}
   
  },[preferencia])
 
  return (
    <div>
      <h1>Preferencia:{preferencia}</h1>
      <button onClick={handleCLick} style={{ margin: "5px" }}>
        notebook
      </button>
      <button onClick={handleCLick} style={{ margin: "5px" }}>
        smartphone
      </button>
 <Produto preferencia={preferencia} />
    </div>
  );
}

export default App;

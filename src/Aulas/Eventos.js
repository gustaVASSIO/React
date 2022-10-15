import React from "react";
const Evento = ()=>{
function multiplica10(number){
   let newNumber =number
   newNumber*=2
    return document.getElementById('numero').value = newNumber
}
 return(
 <section>
   <div>
    <label htmlFor="numero">Numero</label><br></br>
    <input style={{width:'80px'}} id="numero" placeholder="number"></input><br></br>
    
    <button onClick={(event)=>multiplica10(Number((document.getElementById('numero').value)))} >Multiplica por 2</button>
   </div>
 </section>
 )
}
export default Evento 
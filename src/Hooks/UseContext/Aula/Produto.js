import React from "react";
import { GLobalContext } from "./GlobalContext";

function Produto() {
  const global = React.useContext(GLobalContext);
  if (global.dados === null) {
    return  <button onClick={global.limparDados}>Limpar Produtos</button> ;
  }

  return (
    
    <div>
      {global.dados.map((item,index) => (
        <li key={index}>{item.nome}</li>
      ))}
     <button onClick={global.limparDados}>Limpar Produtos</button> 
    </div>
  );
}

export default Produto;

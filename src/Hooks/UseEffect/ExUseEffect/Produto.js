import React from "react";

function Produto({preferencia}) {
  const [dados, setDados] = React.useState(null);  

  React.useEffect(()=>{
    if(preferencia!==null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`).then(res =>res.json()).then(json =>setDados(json))
    }
    
  },[preferencia])
  if(dados===null){return null}
  return (
    <div>
      <h1>Produto:{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
}

export default Produto;

import React  from "react";
const Exercice = ()=>{
const produtos = [
    {
        id:1,
        nome:'Celular',
        preco:'R$ 3000',
        cores:['black', 'green', 'red']
    },
    {
        id:2,
        nome:'Camera',
        preco:'R$ 5000',
        cores:['black', 'green', 'red']
    },
    {
        id:3,
        nome:'Cadeira',
        preco:'R$ 500',
        cores:['black', 'green', 'red']
    },
]
const dados = produtos.filter(({preco})=> Number(preco.replace("R$ ",""))>1500)
console.log(dados)
return (

    <>
    {dados.map((produto)=>(
        <>
        <h1 key={produto.id}>{produto.nome}</h1>
        <p key={produto.id}>{produto.preco}</p>
        {produto.cores.map(cor => <><li style={{backgroundColor: cor, color:'white'}} key={cor}>{cor}</li> <br></br></>)}
        </>
        ))}
    </>
)
}
export default Exercice
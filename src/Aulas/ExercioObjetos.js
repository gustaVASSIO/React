import React  from "react";
const luana = {
    cliente: 'Luana',
    idade: 27,
    comapras : [
        {nome: 'Notebook', preco:'R$ 2500'},
        {nome: 'Geladeira', preco:'R$ 3000'},
        {nome: 'Celular', preco: 'R$ 1500'}
    ],
    situacao: true

}
const mario = {
    cliente: 'Mario',
    idade: 27,
    comapras : [
        {nome: 'Televisão', preco:'R$ 2500'},
        {nome: 'Lavadeira', preco: 'R$ 3000'},
        {nome: 'Cadaira Gamer', preco: 'R$ 1500'},
        {nome: 'Secadeira', preco:'R$ 4000'}

    ],
    situacao: false
}
const App =()=>{
    const dados = luana 
    const total = dados.comapras
       .map((item)=>Number(item.preco.replace('R$ ',''))).reduce((acc,item)=>acc+item,0)
        

 
    return(
        <>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p><span style={{color:dados.situacao?'green':'red'}}>{dados.situacao?'Ativa':'Inativa'}</span></p> 
        <p>Total gasto:{total}</p>
        <p>{dados.situacao?'Conta em dia':'Ta gastando ein fi'}</p>
        </>
    )

    }
    

export default App
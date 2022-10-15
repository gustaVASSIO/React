import React  from "react";
const Arrays =()=>{
    const livros = [
        {nome:'Harry Potter e a Camara Secreta', ano: 2007},
        {nome:'Harry Potter e o Prisioneiro de Azkaban', ano: 2011},
        {nome:'Harry Potter e o Calice de Fogo', ano: 2013}
    ]
    return(
        <ul>
            {livros.filter(({ano})=> ano>2007).map(({nome,ano}) => (
            <li key={nome}>{nome} -- {ano}</li>
            ))}
        </ul>
    );
}
export default Arrays
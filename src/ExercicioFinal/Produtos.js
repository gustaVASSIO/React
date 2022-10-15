import React from "react";
import Titulo from "./Titulo";
const produtos = [
  { nome: "Notebook", proriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", proriedades: ["2gb ram", "128gb"] },
];
function Produtos() {
  return <>
    <Titulo texto = 'Produto'/>
  </>;
}

export default Produtos;

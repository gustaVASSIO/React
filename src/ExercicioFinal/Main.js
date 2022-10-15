import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

function Main() {
    let Pagina 
    const {pathname} = window.location
    if (pathname ==='/') {
        Pagina = Home
    } else {
        Pagina = Produtos
    }
  return (
   <React.Fragment>
    <Header/>
    <Pagina/>
   </React.Fragment>
  )
}

export default Main
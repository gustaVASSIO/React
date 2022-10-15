import React from "react";

export const GLobalContext = React.createContext()

export const GLobalStorage =({children})=>{
    const [dados,setDados] = React.useState(null) 
    // const [contar, setContar] = React.useState(0)

    // function adicionarUm(){
    //     setContar((valor)=> valor+1)
    // }
    // function adicionarDois(){
    //     setContar((valor)=>valor+2)
    // }
    React.useEffect(()=>{
        fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
        .then(response=>response.json())
        .then(json=>setDados(json))
    },[])

    function limparDados(){
        setDados(null)
    }

    return(
        <GLobalContext.Provider value={{dados,limparDados}}>
            {children}
        </GLobalContext.Provider>
    );
}
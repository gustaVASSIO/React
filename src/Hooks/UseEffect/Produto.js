import React from 'react'

function Produto() {
    React.useEffect(()=>{
        function handleScroll(){
             
        }
      window.addEventListener('scroll',handleScroll)
    return ()=>{
        window.removeEventListener('scroll',handleScroll)
    }      
    },[])
    
    return (
    <div style={{height:'200vh'}}><p>Meu Produto</p></div>
  )
}

export default Produto
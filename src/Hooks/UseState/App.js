import React from "react";

function Estado() {
  const [constador, setContador] = React.useState(1);
  const [item, setItem] = React.useState(["Item 1",'Item 2','Item 3']);
  function handleClick() {
    setContador((constador) => {
      return constador + 1;
    });
  }
  return (
    
    <div>
      <button></button>
      {item.map(item =>
        <li>{item}</li>
        )}
      <button onClick={handleClick}>{constador}</button>
    </div>
  );
}

export default Estado;

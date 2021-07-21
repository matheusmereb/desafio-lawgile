import React, { useState } from "react";

const initialList = [
    {
      id: '0',
      produto: '',
      quantidade: 0,
      valor: 49.90,
    }
]

const [list, setList] = useState(initialList);
let idInicial = localStorage.setItem('idLocal', '1')
console.log(idInicial);

const List = () => {

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
    
        setList(newList);
    }

  function handleClick()  {
    let type = document.getElementById('type')
    let quantity = document.getElementById('qtd')
    let idNovo = parseInt(localStorage.getItem('idLocal'), 10) + 1
    console.log(idNovo);
    localStorage.setItem('idLocal', JSON.stringify(idNovo))
    const newList = list.concat({
        id: idNovo.toString(),
        produto: type.value, 
        quantidade: quantity.value})
    setList(newList);
    }

  return (

    <>
        <button onClick={() => handleClick()}>Add Item</button>
        <ul>
        {list.map((item) => (
            <li key={item.id}>
            <span>{item.produto}</span>
            <span>{item.quantidade}</span>
            <span>{item.valor}</span>
            <button type="button" onClick={() => handleRemove(item.id)}>
                Remove
            </button>
            </li>
        ))}
        </ul>
    </>
  )
};

export default List
    
    /* <>
            {props 
                    ? <>
                        <p>{(this.state.produto)} x {(this.state.quantidade)} cx - R$00,00</p> <button>X</button>
                    </>
                    : <p></p>}
        </> */
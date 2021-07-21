import React, { useState } from "react";
import Item from './Item'

const initialList = [
    {
      id: '0',
      nome: '',
      email: '',
      pedido: <Item />,
      valorTotal: 0
    }
]

const List = () => {

  const [list, setList] = useState(initialList);
  let idInicial = localStorage.setItem('idLocal', '1')
  console.log(idInicial);

  function handleClick()  {
    let type = document.getElementById('type')
    let quantity = document.getElementById('qtd')
    let idNovo = parseInt(localStorage.getItem('idLocal'), 10)
    idNovo ++
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
    </>
  )
};

export default List
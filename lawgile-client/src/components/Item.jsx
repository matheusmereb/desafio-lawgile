import React, { useState } from 'react';

const Item = (props) => {
    const produtoInicial = {
        id: '',
        nome: '',
        quantidade: 0,
        valor: 0.0
    }
    const [novoProduto, setProduto] = useState(produtoInicial) 

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
    
        setList(newList);
    }

    return ( 
        <>
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
     );
}
 
export default Item;
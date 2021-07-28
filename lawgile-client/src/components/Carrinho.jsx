import React, { useState, useRef } from 'react'
// import { API } from "aws-amplify"
// import config from "../config"
import { useHistory } from "react-router-dom"

export default function Carrinho() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const inputItem = useRef(null)
    const qtyItem = useRef(null)
    const history = useHistory()

    function handleClick() {
        let date = new Date()
        date = date.toString()
        const newItem = {
            id: date,
            produto: inputItem.current.value,
            quantidade: qtyItem.current.value
        }
        // setItems([...items, newItem]);
    }

    function handleRemove(id) {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }

    function handleSubmit() {

        /* createPedido({ content })
        
        function createPedido(pedido) {
          return API.post("lawgile", "/pedidos", {
            body: pedido
          })
        } */
        console.log('Submitted')
    }

    return ( 
        <div>
            <div className="section" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <form className="cart-div" id="cart" onSubmit={
                    event => event.preventDefault()}>
                    <h3 style={{marginBottom: 40, fontWeight: 'bold', fontSize: '2rem'}}>PEÇA JÁ</h3>
                    <label>Nome:
                        <input className="" type="text" placeholder="Nome"/>
                    </label>
                    <br />
                    <label>E-mail:
                        <input className="" type="text" placeholder="E-mail"/>
                    </label>
                    <br />
                    <label>Selecione o produto e a quantidade desejada (em cxs.):
                        <br></br>
                        <select ref={inputItem}>
                            <option value="Post-it Verde" id="produto">Post-it Verde</option>
                            <option value="Post-it Rosa" id="produto">Post-it Rosa</option>
                            <option value="Post-it Laranja" id="produto">Post-it Laranja</option>
                            <option value="Post-it Azul" id="produto">Post-it Azul</option>
                            <option value="Post-it Amarelo" id="produto">Post-it Amarelo</option>
                        </select>
                        <select id="qtd" ref={qtyItem}>
                            <option value="x 1">1</option>
                            <option value="x 2">2</option>
                            <option value="x 3">3</option>
                            <option value="x 4">4</option>
                            <option value="x 5">5</option>
                            <option value="x 6">6</option>
                            <option value="x 7">7</option>
                            <option value="x 8">8</option>
                            <option value="x 9">9</option>
                            <option value="x 10">10</option>
                        </select>
                    <button onClick={() => handleClick()}>Add Item</button>
                    </label>
                    <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <span>{item.produto}</span>&nbsp;&nbsp;
                            <span>{item.quantidade}</span>&nbsp;&nbsp;
                            <span>{item.valor}</span>&nbsp;&nbsp;&nbsp;
                            <button type="button" onClick={handleRemove(item.id)}>
                                Remove
                            </button>
                        </li>
                        ))}
                    </ul>
                    <br />
                    <label>
                        <input type="submit" className="l-btn l-btn-2" value="FINALIZAR PEDIDO" onClick={handleSubmit()}></input>
                    </label>
                </form>
            </div>
        </div>
    )
}
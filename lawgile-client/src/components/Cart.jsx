import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: '', email: '', produto: '', quantidade: 1, valor: 0, total: 0}

        this.handleSubmit = (event) => {
            event.preventDefault()
            const pedido = this.state
            localStorage.setItem(this.state.email, JSON.stringify(pedido))
            console.log(pedido)
        }
    
        this.changeName = (event) => {
            this.setState({nome: event.target.value})
        }
    
        this.changeEmail = (event) => {
            this.setState({email: event.target.value})
        }

        this.changeCheckbox = (event) => {
            this.setState({aceito: event.target.checked})
        }

        this.changeProduct = (event) => {    
            this.setState({produto: event.target.value});  
        }
    
        this.changeQuantity = (event) => {
            this.setState({quantidade: event.target.value})
            const value = this.produto * this.quantidade
            this.setState({valor: value.target.value})
        }

        // this.handleValue = () => {}
    }


    render(){
        return(
            <div className="container cart-div" id="cart">
                <label>Nome: 
                    <input className="" type="text" value={this.state.nome} onChange={this.changeName} placeholder="Nome"/>
                </label>
                <br />
                <label>E-mail:
                    <input className="" type="text" value={this.state.email} onChange={this.changeEmail} placeholder="E-mail"/>
                </label>
                <br />
                <label>Selecione o produto e a quantidade desejada:
                    <br></br>
                    <select id="type" onChange={this.changeProduct}>
                        <option value="verde">Post-it Verde</option>
                        <option value="rosa">Post-it Rosa</option>
                        <option value="laranja">Post-it Laranja</option>
                        <option value="azul">Post-it Azul</option>
                        <option value="amarelo">Post-it Amarelo</option>
                    </select>
                    <select id="qtd" onChange={this.changeQuantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <p>Valor total - R${(this.valor)}</p>
                </label>
                <button>Adicionar</button>
                <br />
                <div>
                    {/* Pedido -> Item x Quantidade - Valor Total  && Delete btn*/}
                </div>
                <br />
                <label>
                    <button className="l-btn l-btn-2" onClick={this.handleSubmit}>FINALIZAR PEDIDO</button>
                </label>
            </div>
        )
    }
}
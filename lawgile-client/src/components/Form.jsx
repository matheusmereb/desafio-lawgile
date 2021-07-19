import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: '', email: '', aceito: true}

        this.handleSubmit = (event) => {
            event.preventDefault()
            const inscrito = this.state
            localStorage.setItem(this.state.email, JSON.stringify(inscrito))
            console.log(inscrito)
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
    }

    render(){
        return(
            <div>
                <label>
                    <input className="form-input" type="text" value={this.state.nome} onChange={this.changeName} placeholder="Nome"/>
                </label>
                <br />
                <label>
                    <input className="form-input" type="text" value={this.state.email} onChange={this.changeEmail} placeholder="E-mail"/>
                </label>
                <br />
                <label>
                    <input type="checkbox" checked={this.state.aceito} onChange={this.changeCheckbox} style={{margin: 10, opacity: '80%'}} /> Aceito receber informações promocionais pelo e-mail
                </label>
                <br />
                <button className="l-btn l-btn-1" onClick={this.handleSubmit}>INSCREVA-ME</button>
                <a data-scroll href="#showcase"><button className="l-btn l-btn-2">QUERO SABER MAIS</button></a>
            </div>
        )
    }
}
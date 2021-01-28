import './App.css';
import React, { Component } from 'react'
//Paginas
import Comentario from './components/Comentario';

// function App() {
//   return (
//     <>
//    <h1>Teste</h1>
//    <Comentario name="Dudu" email="lesk@dudu.com" data={new Date()}/>

//    <Comentario name="adinha" email="ada@adinha.com" data={new Date()}>
//      Ola teste 
//    </Comentario>
//    </>
//   );
// } Usando function e propriedades : ) 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component{
  //Forma antiga 
  state={ /*State recebe um array de comentarios */
    comentarios:[
      {
        nome: 'nome 1',
        email: "email@teste.com",
        data: new Date(),
        mensagem: "mensagem de teste"
      }
      , {
        nome: 'nome 2',
        email: "email@teste2.com",
        data: new Date(),
        mensagem: "mensagem de teste 2"
      }
    ],
    novoComentario :{
      nome:'',
      email:'',
      mensagem:''
    }
  }

  adicionarComentario = (evento) =>{   /*Cada vez que a função rodar a variavel lista vai receber o array de comentarios e adicionar o novo comentario 
    incluido de maneira estatica no codigo e assim atualizar o state usando o setState onde o state de comentarios recebe o novo state atualizado 
    que é o lista */
   evento.preventDefault();
    // const novoComentario = {
    //   nome: "Fulana",
    //   email: "algumemail@test.com",
    //   data: new Date(),
    //   mensagem: "Testando função add comentario"
    // }
    
    // let lista = this.state.comentarios
    // lista.push(novoComentario)
    // this.setState({comentarios: lista}) Pode ser feito assim OU


    const novoComentario = {...this.state.novoComentario, data:new Date()} //pega o novo comentario DINAMICO vindo do state e adiciona a data atual
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario], //Ele pega tudo que tem no state de comentarios e adiciona o state de novo comentario
      novoComentario:{nome: '', email:'', mensagem:''}  //Aqui limpa os campos
    })
  }


  removerComentario =(comentario) =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c=> c !== comentario) //Filtrar todos os comentarios que forem diferentes do comentario clicado e assim retorna um novo array excluindo o atual comentario da listagem.

    this.setState({comentarios: lista})  // State comentarios recebe o lista
  }
inputvalores= evento =>{

  const value = evento.target.value;
  const name = evento.target.name;
  this.setState({
    novoComentario:{...this.state.novoComentario, [name]: value}
  })
}
  render(){
    return(
      <>

      {
        this.state.comentarios.map((comentario, indice)=>(
          <Comentario
          key={indice}
          name={comentario.nome}
          email={comentario.email}
          data={comentario.data}
          mensagem={comentario.mensagem}
          onRemove={this.removerComentario.bind(this, comentario)} //onRemove n existe foi inventado agr, e com o bind é enviado uma referencia da função para o componente comentario
          />
        ))
      }
   
  <div className="container">
      <form method="POST" onSubmit={this.adicionarComentario}>
        <h2 className="tituloFormulario">Adicionar comentario</h2>
        <div className="col-md-6">
          <input type="text" 
          name="nome"
          value={this.state.novoComentario.nome}
           onChange={this.inputvalores}
          className="form-control"
          placeholder="Digite seu nome"/>
        </div>
        <div className="col-md-6">
          <input className="form-control"
          name="email"
          value={this.state.novoComentario.email}
          onChange={this.inputvalores}
           type="email"
          placeholder="Digite seu email"/>
        </div>

        <div className="col-md-10">
          <textarea className="form-control"
          name="mensagem"
           value={this.state.novoComentario.mensagem}
           onChange={this.inputvalores}
           rows="2"
          placeholder="Escreva seu comentario..."/>
        </div>
        
        
        <div className="addComent"> 
        <button type="submit" onSubmit={this.adicionarComentario} className="btn btn-lg btn-block btn-add-comentario">Adicionar comentario</button>
      </div>
      </form>
      </div>
       </>
    )
  }
}

export default App;

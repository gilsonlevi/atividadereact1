import React from 'react'
import styles from './CadastroUsuario.module.css'
import { useState } from 'react';

function CadastroUsuario() {

  const [nomeUsuario, setNomeUsuario] = useState("")
  const [emailUsuario, setEmailUsuario] = useState("")
  const [senhaUsuario, setSenhaUsuario] = useState("")
  const [senhaUsuarioConfirmada, setSenhaConfirmada] = useState("")

  function limparCampos(){
    console.log('limpando')
    setEmailUsuario('')
    setNomeUsuario('')
    setSenhaUsuario('')
    setSenhaConfirmada('')
  }
  function salvarUsuario(nomeUsuario, emailUsuario, senhaUsuario) {
    if(validacaoEmail(emailUsuario) == true){
      let usuario = {nomeUsuario, emailUsuario, senhaUsuario}
      console.log(usuario)
      localStorage.setItem("usuario", JSON.stringify (usuario))
      limparCampos()
    }else {
      alert("Confira o email")
    }

  }

  function validacaoEmail(emailUsuario){
    if(emailUsuario.includes('@')){
      console.log("existe")
      return true
    }else {
      console.log("Não existee")
      return false
    }
    
  }

  function validacaoSenha(senhaUsuario, senhaUsuarioConfirmada) {
    if(senhaUsuario !== senhaUsuarioConfirmada) {
      alert("As senhas não são iguais")
    }else{
      salvarUsuario(nomeUsuario,emailUsuario, senhaUsuario)
    }
  }


  return(
    <div className={styles.container}>
      <h1>Se cadastre no nosso site</h1>
      <form className={styles.formulario}>

      <label>Nome:</label>
      <br/>
      <input
        type='text'
        name='nomeUsuario'
        value={nomeUsuario}
        onChange={(e)=> setNomeUsuario(e.target.value)}
      ></input>
      <br/>

      <label>Email:</label>
      <br/>
      <input
        type='email'
        name='emailUsuario'
        value={emailUsuario}
        onChange={(e)=> setEmailUsuario(e.target.value)}
      ></input>
       <br/>

      <label>Senha:</label>
      <br/>
      <input 
        type='password'
        name='senhaUsuario'
        value={senhaUsuario}
        onChange={(e)=> setSenhaUsuario(e.target.value)}
      ></input>
       <br/>

      <label>Confirmação da Senha:</label>
      <br/>
      <input
        type='password'
        name='senhaUsuarioConfirmada'
        value={senhaUsuarioConfirmada}
        onChange={(e)=> setSenhaConfirmada(e.target.value)}
      ></input><br/>
      <input type="button" value="Cadastrar" 
          onClick={()=> validacaoSenha(senhaUsuario, senhaUsuarioConfirmada)}  />
      
      </form>
    </div>
  );
}

export default CadastroUsuario;
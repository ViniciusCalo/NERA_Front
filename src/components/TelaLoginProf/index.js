import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const TelaLoginProf = () => {
  const nav = useNavigate()
  const [sessao, setSesao] = useState([])
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handleSenha = (e) => {
  setSenha(e.target.value)
}


const handleVerificarUsuario = async () => {
  var body = {
    "email": email,
    "senha": senha
}
try {
    const response = await axios.post("http://localhost:443/usuario/login", body)
    setSesao(response.data.message);
    console.log(sessao)
    localStorage.setItem('usuario', email);
    nav('/perfil')
} catch (err) {
    console.log(err);
    alert("senha e/ou email incorreto")
}
}


  return (
    <C.Box>
        <C.Logo src={Logo}/>
        <C.Container>
        <C.DivButton>
        <C.ButtonAlu href='loginAluno'>Estudante</C.ButtonAlu>
          <C.ButtonProf>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin>
        <C.Input type="text" onChange={handleEmail} placeholder="E-mail ou nome do usuário"/>
        <C.Input type="password" onChange={handleSenha} placeholder="Senha"/>
        <C.div>
            <C.Link>Esqueci minha senha?</C.Link>
        </C.div>
        <C.Button type='button' onClick={handleVerificarUsuario} >Entrar</C.Button>
        <C.DivLinha>
            <C.linha1></C.linha1>
            ou
            <C.linha2></C.linha2>
        </C.DivLinha>
        <C.ButtonG> Login com Google</C.ButtonG>
        <C.Button>Criar Conta</C.Button>
        </C.FormLogin>
        </C.Container>
    </C.Box>
  );
};

export default TelaLoginProf;
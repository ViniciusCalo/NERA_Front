import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'



const TelaLoginAluno = () => {
  return (
    <C.Box>
        <C.Logo src={Logo}/>
        <C.Container>
        <C.DivButton>
        <C.ButtonAlu>Estudante</C.ButtonAlu>
          <C.ButtonProf>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin>
        <C.Input type="text" placeholder="E-mail ou nome do usuário"/>
        <C.Input type="password" placeholder="Senha"/>
        <C.div>
            <C.Link>Esqueci minha senha?</C.Link>
        </C.div>
        <C.Button>Entrar</C.Button>
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

export default TelaLoginAluno;
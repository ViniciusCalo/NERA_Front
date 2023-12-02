import React from 'react'
import * as C from './styles'
import pizza from './img/pizza.png'
import reload from './img/reload.png'
import tip from './img/tip.png'
import next from './img/next.png'

const TelaQuestao = () => {
    return (
        <>
            <C.Header>
                <C.Titulo>MODULO I - Frações</C.Titulo>
            </C.Header>
            <C.Questao>
                <C.Enunciado>
                    <C.TextoEnunciado>1- Toque na fração correspondente às fatias que faltam:</C.TextoEnunciado>
                </C.Enunciado>
                <C.DivImagem>
                    <img src={pizza} alt="questao1" border="0" />
                </C.DivImagem>
                <C.Alternativas>
                    <C.Alternativa>
                        <C.TextoAlternativa>1</C.TextoAlternativa>
                        <C.TextoLinha>__</C.TextoLinha>
                        <C.TextoAlternativa>8</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa>
                        <C.TextoAlternativa>1</C.TextoAlternativa>
                        <C.TextoLinha>__</C.TextoLinha>
                        <C.TextoAlternativa>2</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa>
                        <C.TextoAlternativa>6</C.TextoAlternativa>
                        <C.TextoLinha>__</C.TextoLinha>
                        <C.TextoAlternativa>8</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa>
                        <C.TextoAlternativa>1</C.TextoAlternativa>
                        <C.TextoLinha>__</C.TextoLinha>
                        <C.TextoAlternativa>1</C.TextoAlternativa>
                    </C.Alternativa>
                </C.Alternativas>
            </C.Questao>
            <C.ContainerMenu>
                <C.BtnReload><C.iconButton src={reload} alt='Refazer'></C.iconButton>Refazer</C.BtnReload>
                <C.BtnTip><C.IconTip src={tip} alt='Dica' />Dica</C.BtnTip>
                <C.BtnNext><C.iconButton src={next} alt='Próximo'></C.iconButton>Próximo</C.BtnNext>
            </C.ContainerMenu>
        </>
    )
}

export default TelaQuestao
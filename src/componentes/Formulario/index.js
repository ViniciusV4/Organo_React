import CampoTexto from "../CampoTexto"
import './Formulario.css';
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from 'react'


const Formulario = (props) => {

        
    const aoSalvar = (evento) => { 
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados Para Criar os Dados do Colaborador</h2>
                <CampoTexto 
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
                obrigatorio={true}
                label="Nome"
                placeholder="Digite seu nome"/>

                <CampoTexto 
                valor={cargo}
                 aoAlterado={valor => setCargo(valor)} 
                 obrigatorio={true} 
                 label="Cargo" 
                 placeholder="Digite seu cargo"/>

                <CampoTexto 
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem (URL)"/>

                <ListaSuspensa 
                valor={time} 
                aoAlterado={valor => setTime(valor)}
                obrigatorio={true} 
                label="Time"
                itens={props.times}
                />
                <Botao>
                     Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
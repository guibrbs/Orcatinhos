import { useState } from "react";
import { InputTemplate } from "../InputTemplate";
import './styles.css'
import {AiFillCloseCircle} from 'react-icons/ai'

interface FormTemplateInterface{
    type: boolean,
    button: string,
    title: string,
    setCloseContainer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormTemplate({ type, button, title, setCloseContainer }:FormTemplateInterface){

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    return(
        <section className="submit-section">
             <form className="submit-container">
                <div className="close-btn" onClick={() => setCloseContainer(true)}><AiFillCloseCircle size={20}/></div>
                <h1 className="submit-title">{title}</h1>
                <InputTemplate type="Nome" placeholder={!type ? "Insira o nome" : `${nome}`} setProps={setNome}/>
                <InputTemplate type="Telefone" placeholder={!type ? "Insira o telefone" : `${telefone}`} setProps={setTelefone}/>
                <InputTemplate type="Email" placeholder={!type ? "Insira o email" : `${email}`} setProps={setEmail}/>
                <div className="buttons-container">
                    <button className="btn limpar">Limpar</button>
                    <button className="btn submit">{button}</button>
                </div>
             </form>
        </section>
    )
}
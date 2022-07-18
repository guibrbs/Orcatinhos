import { useContext, useState } from "react";
import { InputTemplate } from "../InputTemplate";
import './styles.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import { AuthContext } from "../../contexts/AuthProvider";
import { newContact, updateContact } from "../../services/api";
import { ContactInfoType } from "../ListContacts";

interface FormTemplateInterface{
    type: boolean,
    button: string,
    title: string,
    setCloseContainer: React.Dispatch<React.SetStateAction<boolean>>;
    currentContactInfo?: ContactInfoType
}

export default function FormTemplate({ type, button, title, setCloseContainer, currentContactInfo }:FormTemplateInterface){
    const [nome, setNome] = useState(currentContactInfo?.nameContact || '')
    const [telefone, setTelefone] = useState(currentContactInfo?.telephoneContact || '')
    const [email, setEmail] = useState(currentContactInfo?.emailContact || '')

    const {user, updateUser} = useContext(AuthContext)


    const handleSubmitNewContact = async (e: any) => {
        e.preventDefault()
        if (!type){
            const newUserInfo = await newContact(nome, email, telefone, user.id)
            updateUser(newUserInfo)
        }else{
            const updatedContact = await updateContact(nome, email, telefone, currentContactInfo?.idContato, user.id)
            updateUser(updatedContact)
        }
    }

    const handleClear = () => {
        setNome('')
        setTelefone('')
        setEmail('')
    }

    return(
        <section className="submit-section">
             <form className="submit-container" onSubmit={handleSubmitNewContact}>
                <div className="close-btn" onClick={() => setCloseContainer(true)}><AiFillCloseCircle size={20}/></div>
                <h1 className="submit-title">{title}</h1>
                <InputTemplate type="Nome" placeholder={"Insira o nome"} setProps={setNome} value={nome}/>
                <InputTemplate type="Telefone" placeholder={"Insira o telefone"} setProps={setTelefone} value={telefone}/>
                <InputTemplate type="Email" placeholder={"Insira o email"} setProps={setEmail} value={email}/>
                <div className="buttons-container">
                    <button className="btn limpar" onClick={handleClear}>Limpar</button>
                    <button className="btn submit">{button}</button>
                </div>
             </form>
        </section>
    )
}
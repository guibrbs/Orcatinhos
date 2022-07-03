import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'
import { useState } from "react";
import { RegistrationPerformed } from "./RegistrationPerformed";

interface LogonInterface{
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Logon( {setIsRegistering}: LogonInterface ){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [successfulRegistration, setSuccessfulRegistration] = useState(false)

    const handleSuccessfulRegistration = () => {
        setSuccessfulRegistration(true)
    }

    return(
        <section className="auth-input-section">
            <h1 className="auth-input-title">Registre-se</h1>
            <p className="auth-input-subtitle">Por favor insira seus dados para cadastro</p>
            <form className="form">
                <InputTemplate type="Nome" placeholder="Insira seu nome completo" setProps={setName}/>
                <InputTemplate type="Email" placeholder="Insira seu email" setProps={setEmail}/>
                <InputTemplate type="Senha" placeholder="Insira sua senha" setProps={setPassword}/>
                <button className="auth-button" onClick={handleSuccessfulRegistration}>Cadastrar</button>
            </form>
            <p className="auth-connection">Já possui uma conta? 
                <span className="contrast" onClick={() => setIsRegistering(false)}> Entre agora mesmo.</span>
            </p>
            {
                successfulRegistration ? <RegistrationPerformed /> : <></>
            }
        </section>
    )
}
import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'
import { useState } from "react";

interface LoginInterface{
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Login( {setIsRegistering}: LoginInterface ){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <section className="auth-input-section">
            <h1 className="auth-input-title">Login</h1>
            <p className="auth-input-subtitle">Bem vindo! Por favor insira seus dados</p>
            <form className="form">
                <InputTemplate type="Email" placeholder="Insira seu email" setProps={setEmail} />
                <InputTemplate type="Senha" placeholder="Insira sua senha" setProps={setPassword} />
                <button className="auth-button">Entrar</button>
            </form>
            <p className="auth-connection">Não possui uma conta? 
                <span className="contrast" onClick={() => setIsRegistering(true)}> Registre-se.</span>
            </p>
        </section>
    )
}
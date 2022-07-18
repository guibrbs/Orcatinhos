import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

interface LoginInterface{
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Login( {setIsRegistering}: LoginInterface ){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {login} = useContext(AuthContext)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        login(email, password)
    }

    return(
        <section className="auth-input-section">
            <h1 className="auth-input-title">Login</h1>
            <p className="auth-input-subtitle">Bem vindo! Por favor insira seus dados</p>
            <form className="form" onSubmit={handleSubmit}>
                <InputTemplate type="Email" placeholder="Insira seu email" setProps={setEmail} value={email}/>
                <InputTemplate type="Senha" placeholder="Insira sua senha" setProps={setPassword} value={password}/>
                <button className="auth-button" type="submit">Entrar</button>
            </form>
            <p className="auth-connection">Não possui uma conta? 
                <span className="contrast" onClick={() => setIsRegistering(true)}> Registre-se.</span>
            </p>
        </section>
    )
}
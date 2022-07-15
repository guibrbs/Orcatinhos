import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'
import { useState } from "react";
import { RegistrationPerformed } from "./RegistrationPerformed";
import api from '../services/api';


interface LogonInterface {
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Logon({ setIsRegistering }: LogonInterface) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [successfulRegistration, setSuccessfulRegistration] = useState(false)
    const registerUrl = 'http://localhost:3001/auth/register'
    const handleSubmitNewUser = (event: any) => {
        event.preventDefault()

        api.post(registerUrl, {
            "name": `${name}`,
            "email": `${email}`,
            "password": `${password}`,
            "confirmPassword": `${confirmPassword}`
        }).then(() => {
            setSuccessfulRegistration(true)
        }).catch((error) => {
            console.log("Deu tudo errado!")
        })
    }


    return (
        <section className="auth-input-section">
            <h1 className="auth-input-title">Registre-se</h1>
            <p className="auth-input-subtitle">Por favor insira seus dados para cadastro</p>
            <form className="form" onSubmit={handleSubmitNewUser}>
                <InputTemplate type="Nome" placeholder="Insira seu nome completo" setProps={setName} />
                <InputTemplate type="Email" placeholder="Insira seu email" setProps={setEmail} />
                <InputTemplate type="Senha" placeholder="Insira sua senha" setProps={setPassword} />
                <InputTemplate type="Confirme a Senha" placeholder="Confirme a senha" setProps={setConfirmPassword} />
                <button className="auth-button" type="submit">Cadastrar</button>
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
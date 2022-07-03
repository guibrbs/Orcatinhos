import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'

interface LoginInterface{
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Login( {setIsRegistering}: LoginInterface ){
    return(
        <section className="auth-input-section">
            <h1 className="auth-input-title">Login</h1>
            <p className="auth-input-subtitle">Bem vindo! Por favor insira seus dados</p>
            <InputTemplate type="Email" placeholder="Insira seu email" />
            <InputTemplate type="Senha" placeholder="Insira sua senha" />
            <button className="auth-button">Entrar</button>
            <p className="auth-connection">Não possui uma conta? 
                <span className="contrast" onClick={() => setIsRegistering(true)}> Registre-se.</span>
            </p>
        </section>
    )
}
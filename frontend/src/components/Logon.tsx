import { InputTemplate } from "./InputTemplate";
import '../styles/authInput.css'

interface LogonInterface{
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Logon( {setIsRegistering}: LogonInterface ){
    return(
        <section className="auth-input-section">
            <h1 className="auth-input-title">Registre-se</h1>
            <p className="auth-input-subtitle">Por favor insira seus dados para cadastro</p>
            <InputTemplate type="Nome" placeholder="Insira seu nome completo" />
            <InputTemplate type="Email" placeholder="Insira seu email" />
            <InputTemplate type="Senha" placeholder="Insira sua senha" />
            <button className="auth-button">Cadastrar</button>
            <p className="auth-connection">Já possui uma conta? 
                <span className="contrast" onClick={() => setIsRegistering(false)}> Entre agora mesmo.</span>
            </p>
        </section>
    )
}
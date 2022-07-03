import './styles.css'

interface InputTemplateInterface{
    type: string,
    placeholder: string
}

export function InputTemplate( { type, placeholder }: InputTemplateInterface ){
    return(
        <>
            <p>{type}</p>
            <input required type={type === "Senha" ? "password" : "text"} placeholder={placeholder} className="auth-input" />
        </>
    )
}
import "../styles/noContacts.css"
import Drift from "./../assets/adrift.svg"

export function NoContacts () {
    return(
        <div>
            <img src={Drift} className="adrift"/>
            <p className="adrift-text">Nenhum contato cadastrado</p>
        </div>
    )
}
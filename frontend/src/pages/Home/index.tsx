import Orcatinhos from "../../assets/orcatinhos.svg"
import homeIllustration from "../../assets/home-illustration.svg"
import { NoContacts } from "../../components/noContacts"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { ListContacts } from "../../components/ListContacts"
import "./styles.css"


export function HomePage(){
    return(
        <section className="section">
            <div className="navbar">
                <img src={Orcatinhos} alt="" className="logo"/>
                <p className="exit">Sair</p>
            </div>
            
            <div>
                <div className="home-illustration-section">
                    <div className="home-title-section">
                        <h1 className="home-illustration-title">
                            Bem-vindo, Fulano de tal
                        </h1>
                        <button className="home-button"><AiOutlineUserAdd fontSize={20}/>Cadastrar um contato</button>
                    </div>
                    <img src={homeIllustration} alt="" className="homeIllustration"/>
                </div>
            </div>

            <div>
                <h1 className="contacts">Contatos cadastrados</h1>
            </div>
            <ListContacts/>
            {/*<NoContacts/>*/}
        </section>            
    )
}
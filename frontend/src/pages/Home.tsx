import Orcatinhos from "./../assets/orcatinhos.svg"
import "./Home.css"
import homeIllustration from "./../assets/home-illustration.svg"
import { NoContacts } from "../components/noContacts"

export function HomePage(){
    return(
        <section>
            <div className="navbar">
                <img src={Orcatinhos} alt="" className="logo"/>
                <p className="exit">Sair</p>
            </div>
            
            <div>
                <div className="home-illustration-section">
                    <div>
                        <h1 className="home-illustration-title">
                            Bem-vindo, Fulano de tal
                        </h1>
                        <button className="home-button">Cadastrar um contato</button>
                    </div>
                    <img src={homeIllustration} alt="" className="homeIllustration"/>
                </div>
            </div>

            <div>
                <h1 className="contacts">Contatos cadastrados</h1>
            </div>

            <div>
                <NoContacts/>
            </div>

        </section>            
    )
}
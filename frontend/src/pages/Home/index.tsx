import Orcatinhos from "../../assets/orcatinhos.svg";
import homeIllustration from "../../assets/home-illustration.svg";
import { NoContacts } from "../../components/noContacts";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ListContacts } from "../../components/ListContacts/index";
import "./styles.css";
import FormTemplate from "../../components/FormTemplate";
import { useEffect, useState } from "react";

export function HomePage() {
  const [showAddContactContainer, setShowAddContactContainer] = useState(false);
  const [showEditContactContainer, setShowEditContactContainer] = useState(false);
  const [closeContainer, setCloseContainer] = useState(false);

  useEffect(() => {
    if(closeContainer){
        setShowAddContactContainer(false)
        setShowEditContactContainer(false)
    }
  }, [closeContainer])

  const handleOpenContainer = () => {
    setShowAddContactContainer(true)
    setCloseContainer(false)
  } 

  return (
    <section className="section">
      {showAddContactContainer && (
        <FormTemplate
          type={false}
          button={"Cadastrar"}
          title={"Adicione um contato"}
          setCloseContainer={setCloseContainer}
        />
      )}
      {showEditContactContainer && (
        <FormTemplate
          type={true}
          button={"Editar"}
          title={"Edite seu contato"}
          setCloseContainer={setCloseContainer}
        />
      )}
      <div className="navbar">
        <img src={Orcatinhos} alt="" className="logo" />
        <p className="exit">Sair</p>
      </div>
      <div>
        <div className="home-illustration-section">
          <div className="home-title-section">
            <h1 className="home-illustration-title">
              Bem-vindo, Fulano de tal
            </h1>
            <button className="home-button" onClick={handleOpenContainer}>
              <AiOutlineUserAdd fontSize={20} />
              Cadastrar um contato
            </button>
          </div>
          <img src={homeIllustration} alt="" className="homeIllustration" />
        </div>
      </div>
      <div>
        <h1 className="contacts">Contatos cadastrados</h1>
      </div>
      <ListContacts setShowEditContactContainer={setShowEditContactContainer} setCloseContainer={setCloseContainer}/>
      {/* <NoContacts /> */}
    </section>
  );
}

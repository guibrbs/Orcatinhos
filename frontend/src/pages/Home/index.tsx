import Orcatinhos from "../../assets/orcatinhos.svg";
import homeIllustration from "../../assets/home-illustration.svg";
import { NoContacts } from "../../components/noContacts";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ContactInfoType, ListContacts } from "../../components/ListContacts/index";
import "./styles.css";
import FormTemplate from "../../components/FormTemplate";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export function HomePage() {
  const [showAddContactContainer, setShowAddContactContainer] = useState(false);
  const [showEditContactContainer, setShowEditContactContainer] = useState(false);
  const [currentContactInfo, setCurrentContactInfo] = useState<ContactInfoType>()
  const [closeContainer, setCloseContainer] = useState(false);
  const {logout, user} = useContext(AuthContext)

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
          currentContactInfo={currentContactInfo}
        />
      )}
      <div className="navbar">
        <img src={Orcatinhos} alt="Orcatinhos Logo" className="logo" />
        <p className="exit" onClick={() => logout()}>Sair</p>
      </div>
      <div>
        <div className="home-illustration-section">
          <div className="home-title-section">
            <h1 className="home-illustration-title">
              Bem-vindo, {user.nameUser}
            </h1>
            <button className="home-button" onClick={handleOpenContainer}>
              <AiOutlineUserAdd fontSize={20} />
              Cadastrar um contato
            </button>
          </div>
          <img src={homeIllustration} alt="Illustração Mulher" className="homeIllustration" />
        </div>
      </div>
      <div>
        <h1 className="contacts">Contatos cadastrados</h1>
      </div>
      {user.contacts.length === 0 ? 
        <NoContacts />
      :
        <ListContacts setShowEditContactContainer={setShowEditContactContainer} setCloseContainer={setCloseContainer} setCurrentContactInfo={setCurrentContactInfo}/>
      }
    </section>
  );
}

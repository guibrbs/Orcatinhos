import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import "./styles.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { api, deleteContact } from "../../services/api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontSize: 15,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRadius: 1,
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
  },
  marginLeft: "25%",
  width: "50%",
  marginRight: "20%",
}));

interface ListContactsInterface{
  setShowEditContactContainer: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseContainer: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentContactInfo: React.Dispatch<React.SetStateAction<ContactInfoType | undefined>>;
}

export type ContactInfoType = {
  emailContact: string,
  idContato: string,
  nameContact: string,
  telephoneContact: string,
}

export function ListContacts({setShowEditContactContainer, setCloseContainer, setCurrentContactInfo}: ListContactsInterface) {
  
  const [contacts, setContacts] = useState([{
    emailContact: "",
    idContato: "",
    nameContact: "",
    telephoneContact: "",
  }])

  const {user} = useContext(AuthContext)

  useEffect(() => {
    if(user.id){
      updateContacts()
    }
  }, [user])
  
  const handleOpenContainer = (contact: ContactInfoType) =>{
    setCurrentContactInfo(contact)
    setShowEditContactContainer(true)
    setCloseContainer(false)
  }

  const updateContacts = () => {
    api.get(`user/contacts/${user.id}`)
      .then((response) => {
        setContacts(response.data.user.contacts)
      })
  }

  const handleDeleteContacts = async (contact: ContactInfoType) => {
    await deleteContact(contact.idContato, user.id)
    await updateContacts()
  }

  return (
    <div className="table">
      <StyledTable size="small" aria-label="a dense table">
        <TableHead>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">Número</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact.idContato}
              sx={{ backgroundColor: "white" }} //arrumar as bordas
            >
              <StyledTableCell component="th" scope="row">
                {contact.nameContact}
              </StyledTableCell>
              <StyledTableCell align="center">{contact.telephoneContact}</StyledTableCell>
              <StyledTableCell align="center">{contact.emailContact}</StyledTableCell>
              <StyledTableCell>
                <div className="buttons-wrapper">
                  <FaEdit
                    className="edit-icon"
                    id="edit"
                    onClick={() => handleOpenContainer(contact)}
                  />
                  <FaTrash
                    className="edit-icon"
                    id="delete"
                    onClick={() => handleDeleteContacts(contact)}
                  />
                </div>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
}

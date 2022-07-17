import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import "./styles.css";
import { FaEdit, FaTrash } from "react-icons/fa";

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

function createData(name: string, number: number, email: string) {
  return { name, number, email };
}

const rows = [
  createData("Fulano1", 111, "Fulano111@.com"),
  createData("Fulano2", 222, "Fulano222@.com"),
  createData("Fulano3", 333, "Fulano333@.com"),
  createData("Fulano2", 222, "Fulano222@.com"),
  createData("Fulano3", 333, "Fulano333@.com"),
  createData("Fulano2", 222, "Fulano222@.com"),
  createData("Fulano3", 333, "Fulano333@.com"),
  createData("Fulano2", 222, "Fulano222@.com"),
  createData("Fulano3", 333, "Fulano333@.com"),
];

interface ListContactsInterface{
  setShowEditContactContainer: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseContainer: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ListContacts({setShowEditContactContainer, setCloseContainer}: ListContactsInterface) {

  const handleOpenContainer = () =>{
    setShowEditContactContainer(true)
    setCloseContainer(false)
  }

  return (
    <div className="table">
      <StyledTable size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">Número</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ backgroundColor: "white" }} //arrumar as bordas
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell>
                <div className="buttons-wrapper">
                  <FaEdit
                    className="edit-icon"
                    id="edit"
                    onClick={handleOpenContainer}
                  />
                  <FaTrash
                    className="edit-icon"
                    id="delete"
                    onClick={() => ({})}
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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Buttons from "../ButtonContact/Button";
import './styles.css'

function createData(name: string, number: number, email: string) {
  return { name, number, email };
}

const rows = [
  createData("Lorem ipsum dolor", 159, "Raquel@.com"),
];

export function ListContacts() {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table
          sx={{ 
            [`& .${tableCellClasses.root}`]: {
                borderBottom: "none"
              }, minWidth: 100 
          }} 
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell><b>Nome</b></TableCell>
              <TableCell align="left"><b>Número</b></TableCell>
              <TableCell align="left"><b>Email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.number}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="center">
                  <Buttons />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

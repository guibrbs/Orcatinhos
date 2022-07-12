import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Buttons from '../ButtonContact/Button'
import { styled } from '@mui/material/styles';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    fontSize: 15,

  },
  
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRadius: 1,
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
  
  }, 
    marginLeft:'25%',
    width: '50%',
    marginRight: '25%'
    
}));

////////////////////////////////////////////////////

function createData(name: string, number: number, email: string) {
  return { name, number, email };
}


const rows = [
  createData('Fulano1', 111, 'Fulano111@.com'),
  createData('Fulano2', 222, 'Fulano222@.com'),
  createData('Fulano3', 333, 'Fulano333@.com'),
];

export function ListContacts() {
  return (
    <div className="table">
      <StyledTable size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Número</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          <TableRow 
            key={row.name}
            sx={{backgroundColor:'white'}} //arrumar as bordas
          >
            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.number}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell> <Buttons/> </StyledTableCell>
          </TableRow>
          ))}
        </TableBody>
      </StyledTable>  
    </div>
    
      
  );
}
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell , { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Buttons from '../ButtonContact/Button'


function createData(
  name: string,
  number: number,
  email: string,
) {
  return { name, number, email };
}

// interface Contact {
//     name: string;
//     number: number;
//     email: string;
// }

const rows = [
  createData('Raquel', 159, 'Raquel@.com'),
  createData('Eucaria', 777, 'Eucaria@.com'),
  createData('Costa', 289, 'Costa@.com'),
];

export default function Contacts() {
  return (
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
            <TableCell >Nome</TableCell>
            <TableCell align="right">Número</TableCell>
            <TableCell align="right">Email</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell>
                <Buttons/>
              </TableCell>
              {/* <TableCell align="right"> -&nbsp;x</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

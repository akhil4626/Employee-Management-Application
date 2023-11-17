

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormDialog from './ADDpopup';
import Editdialog from './AddEdit'




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ButtonAppBar() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editdata,seteditdata] = React.useState({
    row :{},
    key :null
  })

  const [data, setdata] = React.useState([
    {
      firstName: "Ramesh",
      lastName: "Fadatare",
      emailId: "ram@gmail.com",
    },
    {
      firstName: "John",
      lastName: "Cena",
      emailId: "john@gmail.com",
    },
    {
      firstName: "Tom",
      lastName: "Cruise",
      emailId: "tom@gmail.com",
    },
    {
      firstName: "Admin1",
      lastName: "admin",
      emailId: "admin@gmail.com",
    },
  ]);
const handledelete = (ind) => {
    let filter = data.filter((_,b) => ind !== b)
    setdata(filter)
}
const handleedit = (rows,indexs) => {
  setOpenEdit(true)
  
  seteditdata({row:rows, key:indexs})

  console.log(rows,indexs)
}
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="h2">
              Employee Management App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Typography variant="h4" component="h2" style={{ textAlign: 'center' }}>
        Employees List
      </Typography>
      <Button size="large" onClick={() => setOpenAdd(true)} variant="contained" style={{ marginBottom: "20px" }}>Add Employee</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Employee First Name</StyledTableCell>
              <StyledTableCell align="center">Employee Last Name</StyledTableCell>
              <StyledTableCell align="center">Employee Email Id</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" align='left' scope="row">
                  {row.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                <StyledTableCell align="center">{row.emailId}</StyledTableCell>
                <StyledTableCell align="right">
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Button size="large" variant="contained" onClick={() => handleedit(row, index)}>Update</Button>
                    <Button size="large" variant="contained" style={{ backgroundColor: 'black' }} onClick={() => handledelete(index)}>Delete</Button>
                    <Button size="large" variant="contained">View</Button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openAdd && <FormDialog openAdd={openAdd} data={data} setdata={setdata} setOpenAdd={setOpenAdd} />}
      {openEdit && <Editdialog   editdata = {editdata}   openEdit = {openEdit} data ={data} setdata = {setdata} setOpenEdit = {setOpenEdit}/>}

    </>
  );
}



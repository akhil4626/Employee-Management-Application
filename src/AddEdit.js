import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editdialog({editdata, data,setdata, openEdit,setOpenEdit}) {
  const [adddata, setadddata] = React.useState({
    firstName: editdata.row.firstName,
    lastName: editdata.row.lastName,
    emailId: editdata.row.emailId,
  });

  const { firstName, lastName, emailId } = adddata;

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setadddata({ ...adddata, firstName: value });
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setadddata({ ...adddata, lastName: value });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setadddata({ ...adddata, emailId: value });
  };

  const handleAdd = () => {
    console.log('Before Update:', data);
    console.log('Edit Data:', editdata);
    console.log('Add Data:', adddata);
  
    let updatedData = [...data];
    updatedData[editdata.key] = { ...adddata };
    setdata(updatedData);
  
    console.log('After Update:', updatedData); // log the updated state
    setOpenEdit(false);
  };
  
  
  

  return (
    <React.Fragment>
      <Dialog
        open={openEdit}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '1000px', // Adjust the width as needed
            height: '500px', // Adjust the height as needed
          },
        }}
       
      >
        <DialogTitle style = {{position:"relative", left:"40px"}}>Employee Information Edit Portal</DialogTitle>

        <TextField label="First Name" type="text" value = {firstName} onChange={handleFirstNameChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />
        <TextField label="Last Name" type="text" value = {lastName} onChange={handleLastNameChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />
        <TextField label="E-mail" type="text" value = {emailId}  onChange={handleEmailChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />

        <DialogActions>
          <Button variant='outlined' onClick={handleClose} style={{ position: "relative", right: "200px" }}>Cancel</Button>
          <Button variant='outlined' onClick={handleAdd} style={{ position: "relative", right: "200px" }}>Edit Employee</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}




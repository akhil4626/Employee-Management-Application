import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ openAdd, setOpenAdd, data, setdata, ...otherProps }) {
  const [adddata, setadddata] = React.useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const { firstName, lastName, emailId } = adddata;

  const handleClose = () => {
    setOpenAdd(false);
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
    console.log(adddata);

    if (firstName && lastName && emailId) {
      console.log(adddata);
      setdata([...data, adddata]);
    }

    setOpenAdd(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openAdd}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '1000px', // Adjust the width as needed
            height: '500px', // Adjust the height as needed
          },
        }}
        {...otherProps}
      >
        <DialogTitle style = {{position:"relative", left:"40px"}}>Employee Information Addition Portal</DialogTitle>

        <TextField label="First Name" type="text" onChange={handleFirstNameChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />
        <TextField label="Last Name" type="text" onChange={handleLastNameChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />
        <TextField label="E-mail" type="text" onChange={handleEmailChange} style={{ marginTop: "10px", marginBottom: "10px", width: "400px", marginLeft: "60px" }} />

        <DialogActions>
          <Button variant='outlined' onClick={handleClose} style={{ position: "relative", right: "200px" }}>Cancel</Button>
          <Button variant='outlined' onClick={handleAdd} style={{ position: "relative", right: "200px" }}>Add Employee</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

import * as React from 'react';
import {  Button,Modal } from "antd"

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
const {key_id,name,age,address,phone,brithday,profile_image}=props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
<Button onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faTrashCan}    className="BTNDelete" />

</Button>

      <Dialog open={open} onClose={handleClose}>


        <DialogTitle><h1>Delete Driver</h1>  </DialogTitle>
        <DialogContent>
          <DialogContentText>
       <h2>Delete to Driver</h2> 
          </DialogContentText>
          <form>


          </form>
          <img src={profile_image}/>

<h1>{key_id} {name} {age} {address} {phone} {brithday}</h1>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Delete</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

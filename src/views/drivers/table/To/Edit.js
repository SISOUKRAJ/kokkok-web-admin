import * as React from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "../index.css"
import {  Button,Modal } from "antd"
import {Box,FormControl,InputLabel,MenuItem,Select} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function FormDialog(props) {
  
  const [open, setOpen] = React.useState(false);
const {key_id,first_name,last_name,gender,birthday,address,phone,password,device_token,profile_image}=props

const [Firstname, setFirstname] = React.useState('');
const [Lastname, setLastname] = React.useState('');
const [sex, setSex] = React.useState('');

const [birthday1, setBirthday] = React.useState('');
const [address1, setAddress] = React.useState('');
const [device_token1, setDeviveToken] = React.useState('');
const [password1, setPassword] = React.useState('');
const [codecountry, setCodecountry] = React.useState('');
const [ImageProfile, setImageProfile] = React.useState();

const handleChangeSex = (event) => {
  setSex(event.target.value);
};
const handleChangeBirthday = (event) => {
  setBirthday(event.target.value);
};
const handleChangeCodeCountry = (event) => {
  setCodecountry(event.target.value);
};



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

<Button onClick={handleClickOpen}>
  <FontAwesomeIcon icon={faPenToSquare}   className="BTNDelete" />

</Button>
      <Dialog open={open} onClose={handleClose} >


        <DialogTitle><h1>Edit Driver </h1></DialogTitle>
        <DialogContent >
          <DialogContentText> 
       <h2>To Edit Data Driver In This Form  </h2> 
          </DialogContentText>

          <img src={profile_image} width="100px"  style={{marginLeft:55}}/>
         <p style={{marginLeft:80}}>Profile</p>
         
        <TextField id="outlined-basic" label="Firstname" variant="outlined" defaultValue={ first_name }/>
      <TextField id="outlined-basic"  label="Lastname" variant="outlined" defaultValue={ last_name } />
      <TextField id="outlined-basic"  label="Address" variant="outlined" defaultValue={ address } />
      <TextField id="outlined-basic"  label="Password" variant="outlined" defaultValue={ password } />
      <TextField id="outlined-basic"  label="Device Token" variant="outlined" defaultValue={ device_token } />
      <TextField id="outlined-basic"   label="Phone" variant="outlined" defaultValue={ phone } />
      <TextField id="outlined-basic"  label="Birthday" variant="outlined" defaultValue={ birthday } />

  
  



                
                   
                

       


        
        </DialogContent>

        <DialogActions >
          
        <Button onClick={handleClose}>Cancle</Button>

      

        <Button onClick={handleClose}>UpdateDriver</Button>

       

  

 
      
        </DialogActions>
      </Dialog>
    </div>
  );
}

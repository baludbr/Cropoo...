import React from 'react'
import { useState } from 'react';
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import profile from '../../images/Profile.jpg'
import './SignupUi.css'
import {Select,MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';
export default function Signup() {
  const navigate=useNavigate(false)

   var [name,setFullName]= useState(null);
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  function signupdata(){
    const registerdata={
      fullname:name,
      email:mail,
      password:pwd,
      role:selected
    }
    console.log(registerdata);
    axios.post("http://localhost:2000/api/register",registerdata)
    .then(response=> {
      navigate('/login')
    })
    .catch(e=>console.log(e))

  }
 
  return (
    <div>
      <center>
      <Card sx={{maxheight:"400px",mt:20,width:"500px",borderRadius:"5",border:"2px solid green"}}>
            <img src={profile} alt="profilepic" className="profile"/>
          
           <h1>Register</h1>
 <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Full Name"
            value={name}
            onChange={(e)=>{setFullName(e.target.value)}}
          />
          <br/>
          <br/>
 <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Email"
            value={mail}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br/>
          <br/>
 <TextField
            fullWidth
            type="password"
            style={{ width: "300px" }}
            label="Password"
            value={pwd}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
<br/><br/>
     <InputLabel>Select Your Role</InputLabel>
      <Select value={selected} onChange={selectionChangeHandler} sx={{width:300}}>
      <MenuItem value={'Farmer'}>Farmer</MenuItem>
      <MenuItem value={'Seller'}>Seller</MenuItem>
      </Select>
      {
        console.log(selected)
      }
    <br/>
         <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          halfWidth
          color="secondary"
          onClick={signupdata}
        >
          SignUp
        </Button>
         <Typography variant='h6'>Already have an Account?</Typography>
            <Button variant="text" onClick={()=>{ navigate(`/login`)}} sx={{mb:2}}>Login Here</Button>
            </Card>
            </center>
            </div>
  )
}

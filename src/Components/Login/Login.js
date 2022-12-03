import './LoginUi.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import profile from '../../images/Profile.jpg'
import { Button,Card,TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login() {
  var [errmsg,seterrmsg]=useState(null);
  const navigate=useNavigate(false)
  var [mail,setEmail]=useState(null);
  var [pwd,setPassword]=useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['dummycookie']);
  function signindata(){
    const logindata={
      email:mail,
      password:pwd
    }
    axios.post("http://localhost:2000/api/login",logindata)
    .then(response=> {
      console.log(response)
      if(response.status=200){
        setCookie('token', response.data.token, { path: '/' });
        if(response.data.role=="Farmer"){
        navigate('/checkout')  
        }
        else if(response.data.role=="Admin"){
          navigate('/sellers')  
          }
        else if(response.data.role=="Seller"){
          navigate('/shopping')
        }
        }
      else{
        seterrmsg(response.message);

        navigate('/login')  
      }
    })
    .catch(e=>console.log(e))

  }
  return (
    <div className='aa'>
      <center>
      <Card sx={{maxheight:"400px",mt:20,width:"500px",borderRadius:"5",border:"2px solid green"}}>
            <br/>
            <img src={profile} alt="profilepic" className="profile"/>
           <h1>Login</h1>
           {errmsg &&<p>{errmsg}</p>}
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
          <br/>
          <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          halfWidth
          color="secondary"
          onClick={signindata}
        >
          SignIn
        </Button>
        <br/>
        <Typography variant='h6'>Don't have an account?</Typography>
            <Button variant="text" onClick={()=>{ navigate(`/register`)}} sx={{mb:2}}>Register Here</Button>
            </Card>
            </center>
    </div>
  );
}

export default Login;
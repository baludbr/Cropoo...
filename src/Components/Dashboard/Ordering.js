import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { Card,Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import '../MyOrderedProducts/myorderedproducts.css'
function Ordering() {
    const navigate=useNavigate(false)
    
  return (
    
    <div className='landpage'>
      <center>
      <div className="page-title" id="pageTitle">
        <h1 className='heading'>CROPOO...</h1>
        <h2>WELCOMES YOU TO GET PROFIT <span className='color-crop'>CROP</span></h2>
        <h2><span className='span-text'> </span></h2>
        <div className='buttons'>

       <button  onClick={()=>{
        navigate('/register');
       }}
       className='buttoncss registerbtn'>Join with us</button>
       <button  onClick={()=>{
        navigate('/login');
       }}
       className='buttoncss loginbtn'>Sign In</button>
        </div>
       </div> 
      </center>
    </div>

  )
}

export default Ordering
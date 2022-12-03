import React from 'react'
// import '../../css/style.css';
import Padd from "../../images/padd.jpg"
import { Card, Paper, Typography } from '@mui/material';
import { minWidth, Stack } from '@mui/system';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { CardHeader } from '@mui/material';
import { useEffect } from "react";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import VisibilityIcon from '@mui/icons-material/Visibility';
function MyOrderedProducts() {
  const [products,setproducts]=useState(null);
  const [errr,seterrr]=useState(null);
  var data = jwt_decode(Cookies.get('token'));
  useEffect(() => {
    axios.post("http://localhost:2000/api/myorders",{"email":data.userEmail})
    .then((result)=>{

      setproducts(result.data);    
    })
    .catch((err)=>{
      seterrr("No Data found");
      console.log(err);
    })
  },[])
 
  return (
<>
<p>My Products</p>
{errr!=null && <p>{errr}</p>}

{products!=null && <>
<center>
<table border={1}>
    <tr>
        <th>Seller Name</th>
        <th>phonenum</th>
        <th>reqquantity</th>
        <th>Details</th>
        
    </tr>


{products.map((product)=>{

return (
<tr>
<td>{product.sellername}</td>
<td>{product.phonenum}</td>
<td>{product.reqquantity}</td>
<td><VisibilityIcon/></td>
</tr>)
})}
</table>
</center>
</>
}

</>
  )
}

export default MyOrderedProducts
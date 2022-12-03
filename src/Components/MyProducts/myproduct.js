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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from "react-router-dom";

function MyProducts() {
  const [products,setproducts]=useState(null);
  const [errr,seterrr]=useState(null);
  const navigate=useNavigate(false)

  var data = jwt_decode(Cookies.get('token'));
  useEffect(() => {
    axios.post("http://localhost:2000/api/myproducts",{"email":data.userEmail})
    .then((result)=>{
      setproducts(result.data);    
    })
    .catch((err)=>{
      seterrr("No Data found");
      console.log(err);
    })
  },[])

   function deleteorder(val){
    console.log(val);
     axios.post("http://localhost:2000/api/deleteorder",{bid:val})
        .then((vaa)=>{
          navigate('/myproducts');
          window.location.reload(false);
        })
        .catch((err)=>{console.log(err)});
    }

    function editorder(val){
       axios.post("http://localhost:2000/api/editorder",{bid:val})
          .then((vaa)=>{
            navigate('/myproducts');
            window.location.reload(false);
          })
          .catch((err)=>{console.log(err)});
      }
  return (
<>
<p>My Products</p>
{errr!=null && <p>{errr}</p>}

{products!=null && <>
<table border={1}>
    <tr>
        <th>CropName</th>
        <th>Crop Quantity</th>
        <th>Godown</th>
        <th>Farmer Name</th>
        {/* <th>Details</th> */}
        <th>Edit</th>
        <th>Delete</th>
    </tr>


{products.map((product)=>{

return (
<tr>
<td>{product.croptype}</td>
<td>{product.quantity}</td>
<td>{product.godownname},{product.godownaddress}</td>
<td>{product.farmername}</td>
{/* <td><VisibilityIcon/></td> */}
<td><button onClick={()=>{
  navigate(`/editorder/${product._id}`)
}
}><EditIcon/></button></td>

<td><button onClick={()=>{
  deleteorder(product._id);
}}><DeleteIcon/></button></td>
</tr>)
})}
</table>
</>
}

</>
  )
}

export default MyProducts
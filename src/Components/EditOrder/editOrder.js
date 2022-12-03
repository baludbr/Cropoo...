import React from 'react'
import { useState } from 'react';
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
export default function EditOrder() {
    var [farmer_name,setFarmername]= useState(null);
    var [farmer_address,setFarmeraddress]= useState(null);
    var [farmer_phoneno,setfarmerphoneno]=useState(null);
    var [godown_name,setgodownname]= useState(null);
    var [godown_address,setgodownaddress]= useState(null);
    var [storage_no,setstorageno]=useState(null);
    var [crop_type,setcroptype]=useState(null);
    var [qua_ntity,setquantity]=useState(null);
    var [amou_nt,setamount]=useState(null);
    const [products,setproducts]=useState(null);
    const [errr,seterrr]=useState(null);
  const navigate=useNavigate(false)
  var {pid} = useParams();
  var data = jwt_decode(Cookies.get('token'));
  useEffect(() => {
    axios.post("http://localhost:2000/api/getproductdetails",{id:pid})
    .then((result)=>{
        console.log(result.data[0]);
      setproducts(result.data[0]);  
      setFarmername(result.data[0].farmername);  
      setFarmeraddress(result.data[0].farmeraddress);
      setfarmerphoneno(result.data[0].phonenum);
      setgodownname(result.data[0].godownname);
      setgodownaddress(result.data[0].godownaddress);
      setstorageno(result.data[0].storageno);
      setcroptype(result.data[0].croptype);
      setquantity(result.data[0].quantity);
      setamount(result.data[0].amount); 
    })
    .catch((err)=>{
      seterrr("No Data found");
      console.log(err);
    })
  },[])

  function editdata(){
    const id={_id:pid};
    const registereddata=
    {
        farmername:farmer_name,
        farmeraddress:farmer_address,
        mail:data.userEmail,
        phonenum:farmer_phoneno,
        godownname:godown_name,
        godownaddress:godown_address,
        storageno:storage_no,
        croptype:crop_type,
        quantity:qua_ntity,
        amount:amou_nt
    }
    var finalres={id:id,resultdata:registereddata}
    console.log(finalres);
    axios.post("http://localhost:2000/api/editorder",finalres)
    .then((vaa)=>{
      navigate('/myproducts');
      window.location.reload(false);
    })
    .catch((err)=>{console.log(err)});
  }

  return (
    <div >
     
        {products!=null &&
         <div>
          <center>
          <Card sx={{maxheight:"400px",mt:20,width:"500px",borderRadius:"5",border:"2px solid green"}}>
          <br/>
          <Typography variant='h3'>Edit Details</Typography>
          <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Name"
            value={farmer_name}
            placeholder={products.farmername}
            onChange={(e)=>{setFarmername(e.target.value)}}
          />
        <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Address"
            value={farmer_address}
            placeholder={products.farmeraddress}
            onChange={(e)=>{setFarmeraddress(e.target.value)}}
          />
      <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Farmer Phone No"
            value={farmer_phoneno}
            placeholder={products.phonenum}
            onChange={(e)=>{setfarmerphoneno(e.target.value)}}
          />
       <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Godown Name"
            value={godown_name}
            placeholder={products.godownname}
            onChange={(e)=>{setgodownname(e.target.value)}}
          />
      <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Godown Address"
            value={godown_address}
            placeholder={products.godownaddress}
            onChange={(e)=>{setgodownaddress(e.target.value)}}
          />
      <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Storage No"
            value={storage_no}
            placeholder={products.storageno}
            onChange={(e)=>{setstorageno(e.target.value)}}
          />
        <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Crop Name"
            value={crop_type}
            placeholder={products.croptype}
            onChange={(e)=>{setcroptype(e.target.value)}}
          />
        <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Product Quantity"
            value={qua_ntity}
            placeholder={products.quantity}
            onChange={(e)=>{setquantity(e.target.value)}}
          />
    <br/><br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Amount per Kg"
            value={amou_nt}
            placeholder={products.amount}
            onChange={(e)=>{setamount(e.target.value)}}/>
        <Button
          variant="contained"
          style={{ margin: "40px" }}
          halfWidth
          color="secondary"
          onClick={editdata}
        >
          Edit
        </Button>
        </Card>
        </center>
        </div>
        }
    </div>
  )
}

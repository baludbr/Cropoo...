import React from 'react'
import { useState } from 'react';
import { Button, TextField,Card} from "@mui/material";
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import './orderproduct.css'
export default function OrderProduct() {
  const navigate=useNavigate(false)
  var {pid} = useParams();
  var data = jwt_decode(Cookies.get('token'));
  var [seller_name,setSellername]= useState(null);
  var [seller_address,setSelleraddress]= useState(null);
  var [seller_phoneno,setsellerphoneno]=useState(null);
  var [req_quantity,setReqquantity]=useState(null);
  const [order_product,setorderproducts]=useState(null);
  function orderproductdata(){
    const orderproduct={
        sellername:seller_name,
        selleraddress:seller_address,
        mail:data.userEmail,
        phonenum:seller_phoneno,
        productid:pid,
        reqquantity:req_quantity
    }
    axios.post("http://localhost:2000/api/buynow",orderproduct)
    .then(response=> {
      navigate('/shopping');
    })
    .catch(e=>console.log(e))
  }
  useEffect(() => {
    axios.post("http://localhost:2000/api/getproductdetails",{id:pid})
    .then((result)=>{
      setorderproducts(result.data);    
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
       <div>
        <center>
        <Card sx={{maxheight:"400px",mt:20,width:"500px",borderRadius:"5",border:"2px solid yellow"}}>
            {order_product!=null &&
            <div>
            {order_product.map((op)=>{
                    console.log(op);
                    return (<div>
                        <p><b>FarmerName:</b>{op.farmername}</p>
              
                        <p><b>Godown Details:</b>{op.godownname},{op.godownaddress}</p>
                      
                        <p><b>Crop Type:</b>{op.croptype}</p>
                        </div>)
            })}
            </div>
            }
            <hr></hr>
           <h1>Product Registration</h1>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Seller Name"
            value={seller_name}
            onChange={(e)=>{setSellername(e.target.value)}}
          />
          <br/>
         <br/>
             <TextField
            fullWidth
            type="text"

            style={{ width: "300px" }}
            label="Seller Address"
            value={seller_address}
            onChange={(e)=>{setSelleraddress(e.target.value)}}
          />
         <br/>
         <br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Seller Phone No"
            value={seller_phoneno}
            onChange={(e)=>{setsellerphoneno(e.target.value)}}
          />
          <br/>
         <br/>
             <TextField
            fullWidth
            type="text"
            style={{ width: "300px" }}
            label="Required Quantity"
            value={req_quantity}
            onChange={(e)=>{setReqquantity(e.target.value)}}
          />
          <br/>
         <br/>
         <Button
          variant="contained"
          style={{ marginTop: "40px" }}
          fullWidth
          color="secondary"
          onClick={orderproductdata}
        >
          Register
        </Button>
        </Card>
        </center>
        </div>
  )
}

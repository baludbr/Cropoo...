import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

import { Card, Typography,Grid,Button } from '@mui/material';
import { width } from '@mui/system';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Stack} from '@mui/system';
import {ImageList} from '@mui/material';
import {ImageListItem} from '@mui/material';
import {ImageListItemBar} from '@mui/material/ImageListItemBar';
import { ListItem } from '@mui/material';
import TitlebarImageList from './TitlebarImageList';
// import '../../css/style.css';
import { Title } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
function createData(
  Trackid: string,
  Name: string,
  crop: string,
  Quantity: number,
  cost: number,
) {
  return { Trackid,Name,crop,Quantity,cost};
}

const rows = [
 createData('7859478','Madhusudan','Paddy',10,25),
 createData('7859479','Ramu','Cotton',5,90),
 createData('7859480','Srinivas','Chilli',10,130)
];

export default function DashBoard() {
  const navigate=useNavigate(false)
  return (
    <div className='aa'>
       <h1>DashBoard</h1>
       <Button variant="contained"  onClick={()=>{
        navigate('/login');
       }}>Login</Button>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant="contained" onClick={()=>{
        navigate('/register');
       }}>Register</Button>

      <Card sx={{m:3,borderRadius:7,border:"2px solid orange",backgroundColor:"solid blue"}} elevation="2">
       
      <Stack direction="row">
      <Card sx={{border:"2px solid green",height:200,width:400,borderRadius:8,m:5}} elevation='2'>
        <h3>Total Page Views</h3>
        <h4><b>4,42,336</b></h4>
        <p>You made an extra 30,000 this year</p>
      </Card>
      <Card sx={{border:"2px solid green",height:200,width:400,borderRadius:8,m:5}} elevation='2'>
        <h3>Total Users</h3>
        <h4><b>78,250</b></h4>
        <p>You made an extra 8,000 this year</p>
      </Card>
      <Card sx={{border:"2px solid green",height:200,width:400,borderRadius:8, m:5}} elevation='2'>
        <h3>Total Orders</h3>
        <h4><b>10,224</b></h4>
        <p>You made an extra 1,943 this year</p>
      </Card>
      <Card sx={{border:"2px solid green",height:200,width:400,borderRadius:8, m:5}} elevation='2'>
        <h3>Total Sales</h3>
        <h4><b>4,50,000/-</b></h4>
        <p>You made an extra 30,000 this year</p>
      </Card>
      </Stack>
      </Card>
      <center>
        <Card sx={{m:4,borderRadius:8,border:"2px solid blue"}}>
         <TitlebarImageList/>
        </Card>
        <Card sx={{border:"2px solid green",borderRadius:6,m:5}} elevation='2'>
        <Typography variant='h4' align='left'>&nbsp;Recently Added</Typography>
    <TableContainer component={Card} sx={{border:"2px solid red",height:400,width:600,m:5,borderRadius:"8"}}>
      <Table sx={{ minWidth:400 ,height:400}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Trackid</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">crop</TableCell>
            <TableCell align="right">Quantity(In Quintals)</TableCell>
            <TableCell align="right">cost(per KG)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Trackid}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.crop}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </center>
    </div>
  );
}
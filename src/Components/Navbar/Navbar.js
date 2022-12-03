import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import AgricultureSharpIcon from '@mui/icons-material/AgricultureSharp';
import Checkout from "../Checkout/Checkout";
import Shopping from "../Shopping/Shopping";
import { useNavigate } from "react-router-dom";
import DashBoard from '../Dashboard/OrderTable';
import Buyers from '../Buyers/buyers';
import Sellers from '../Sellers/sellers';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import BookingProduct from '../BookingProduct/BookingProduct';
import MyProducts from '../MyProducts/myproduct';
import OrderProduct from '../OrderProduct/orderproduct';
import MyOrderedProducts from '../MyOrderedProducts/myorderedproducts';
import EditOrder from '../EditOrder/editOrder';

function ScrollTop(props) {
  
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  var data = jwt_decode(Cookies.get('token'));
  const navigate=useNavigate(false)
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
        <List sx={{display:"flex",alignItems:"center"}}>
        <List sx={{display:"flex",alignItems:"center"}}>
          <AgricultureSharpIcon sx={{translate:"2px"}}/>
          <Typography variant="h6" component="div">
            Crop Storage System
          </Typography>
          </List>
          <List sx={{display:"flex"}}>      
            {data.userRole=='Farmer'&&<>
              <ListItem button  onClick={() => {
                  navigate("/myproducts");
                }}>
                <ListItemText primary="My Products"/>        
              </ListItem>
                    
              <ListItem button  onClick={() => {
                  navigate("/checkout");
                }}>
                <ListItemText primary="Booking"/>        
              </ListItem>

            
              </>
              }
          
          {data.userRole=='Admin'&&<>
                    <ListItem button  onClick={() => {
                  navigate("/sellers");
                }}>
                <ListItemText primary="Sellers"/>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/buyers");
                }}>
                <ListItemText primary="Buyers"/>        
              </ListItem>
              </>
              }
            {data.userRole=="Seller"&&<>
            <ListItem button  onClick={() => {
                  navigate("/shopping");
                }}>
                <ListItemText primary="Shopping"/>        
              </ListItem>
              <ListItem button  onClick={() => {
                  navigate("/orderedproducts");
                }}>
                <ListItemText primary="My Orders"/>        
              </ListItem>

           
            </>}         
            </List>
        </List>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
        {props.checkout && <BookingProduct/>}
        {props.shopping && <Shopping/>}
        {props.myproducts && <MyProducts/>}
        {props.buyers && <Buyers/>}
        {props.sellers && <Sellers/>}
        {props.buyproduct && <OrderProduct/>}
        {props.orderedproducts && <MyOrderedProducts/>}
        {props.editorder && <EditOrder/>}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

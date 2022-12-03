import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Rating} from '@mui/material';
// import '../../css/style.css';
function Contactus() {


  return (
    <div className="aa"> 
    <br/>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto",border:"2px solid red" }}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Please give your Suggestions to develop our app
          </Typography> 
            <form>
              <Grid container spacing={1}>
                
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter name" label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Issue" variant="outlined" fullWidth required/>
                </Grid>    
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contactus;
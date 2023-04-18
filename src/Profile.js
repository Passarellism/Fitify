import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Profile({ user }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: 'grey.300',
            }}
          >
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            {user?.first_name} {user?.last_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user?.username}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user?.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user?.phone_number}
          </Typography>
        <Link to={`/user/${user?.id}/edit`} style={{ textDecoration: "none", color: "black" }}>
            <Button variant="contained" type="submit" value='Save'>Edit Profile</Button> 
        </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

// import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
// import Button from '@mui/material/Button';

// export default function Profile({ user }) {

//     return(
//         <div>
//             <h1>
//             {user?.first_name}
//             </h1>
//             <h1>
//             {user?.last_name}
//             </h1>
//             <h1>
//             {user?.username}
//             </h1>
//             <h1>
//             {user?.email}
//             </h1>
//             <h1>
//             {user?.phone_number}
//             </h1>
//             <Link to={`/user/${user?.id}/edit`} style={{ textDecoration: "none", color: "black" }}>
//                 <Button variant="contained" type="submit" value='Save'>Edit Profile</Button> 
//             </Link>
//         </div>
//     )
//     }

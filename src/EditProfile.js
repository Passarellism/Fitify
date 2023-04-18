import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Container, TextField, Button, Grid } from '@material-ui/core';;

export default function EditProfile({ user }){

    const history = useHistory();
    const {id} = useParams();  
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        username: '',
        phone_number: '',
        });
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(()=>{
        console.log(id)
        fetch(`http://localhost:5555/user/${id}`)
        .then(res=>res.json())
        .then((data) => {
            setProfile(data);
            setIsLoaded(true);
        })
    }, [id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: profile,
        onSubmit: (values) => {
            fetch(`/user/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        setProfile(data)
                        history.push('/profile')
                    })
                } else {
                    res.json().then(error => console.log(error.message))
                };
        })
        }
    })


    if (!isLoaded) return <h1>Loading...</h1>;
    if ((user&&user.is_admin === false) || (!user)) {
        return <h1>Cannot edit this Profile</h1>
    } else {
        return (
            <>
              <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom>Edit Profile</Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Box display="flex" flexDirection="column">
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                      >
                        First Name:
                      </TextField>
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Last Name"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                      ></TextField>
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      ></TextField>
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      ></TextField>
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Phone Number"
                        name="phone_number"
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                      >
                        Phone Number:
                      </TextField>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Button type="submit" value="Save">
                        Update
                      </Button>
                      <Button type="Button" onClick={() => history.goBack()}>
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Container>
            </>
          );
          
 
    }


}
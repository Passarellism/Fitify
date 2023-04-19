import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home() {
    return (
        <Box sx={{ bgcolor: '#F7F7F7', height: '90vh' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20%' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#1C1C1C' }}>Fitify</Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: '70vh' }}>
                <Grid item xs={11} md={8} lg={6} sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1C1C1C', mb: 2 }}>Select an Exercise and Create Your Plan</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#4D4D4D', mb: 3 }}>With Fitify, you can choose from our pre-made exercises or add your own to create a workout plan that's tailored to you. Add exercises to your calendar to create a plan that fits your schedule and goals.</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1C1C1C', mb: 2 }}>Connect with Trainers and Athletes</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#4D4D4D', mb: 3 }}>Find and follow trainers who match your goals and connect with athletes to stay motivated and track your progress.</Typography>
                    <Button variant="contained" color="primary" href="/signin">Get Started</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;

import React from "react";
import ExerciseCard from "./ExerciseCard";
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function Exercises({exercise, setExercise}){

    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)
    
    return (
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 5, md: 5 }} maxWidth="xl"
            sx={{
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: 200,
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: 200,
                overflowY: 'scroll',
                }}
        >
            <Grid item xs={2.5}>
                <ul style={{ listStyleType: "none", margin: 12, padding: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>All Exercises</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Favorites</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Popular</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Recommended</a></Typography>
                </ul>
            </Grid>
            {/* <Grid style={{ width: "1200px", height: "600px", overflowY: "scroll" }}> */}
                {exerciseCards}
            {/* </Grid> */}
        </Grid>
    )
}

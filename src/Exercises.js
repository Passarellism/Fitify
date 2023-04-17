import React from "react";
import ExerciseCard from "./ExerciseCard";
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function Exercises({exercise, setExercise}){

    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)
    
    return (
        <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 5, md: 5 }} maxWidth="xl">
            <Grid item xs={2}>
                <ul style={{ listStyleType: "none", margin: 0, padding: 30 }}>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>All Exercises</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Favorites</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Popular</a></Typography>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Recommended</a></Typography>
                </ul>
            </Grid>
            <Grid item xs={10}>
                <Grid2 container spacing={9} columnSpacing={{ xs: 12, sm: 5, md: -20 }} maxWidth="xl">
                    {exerciseCards}
                </Grid2>
            </Grid>
        </Grid>
    )
}

import React from "react";
import ExerciseCard from "./ExerciseCard";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Exercises({exercise, setExercise}){

    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={2} style={{ marginTop: "64px", padding: "30px" }}>
                <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>All Exercises</a></Typography>
                <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="/favorites" style={{ textDecoration: "none", color: "black" }}>Favorites</a></Typography>
                <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Popular</a></Typography>
                <Typography variant="h5" style={{ marginBottom: "10px" }}><a href="#" style={{ textDecoration: "none", color: "black" }}>Recommended</a></Typography>
            </Grid>
            <Grid item xs={10} container spacing={2}>
                {exerciseCards}
            </Grid>
        </Grid>
    )
}

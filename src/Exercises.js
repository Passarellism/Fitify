import React from "react";
import ExerciseCard from "./ExerciseCard";
import Grid2 from '@mui/material/Unstable_Grid2';

export default function Exercises({exercise, setExercise}){
    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)

    return (
        <Grid2 container spacing={5} columnSpacing={{ xs: 12, sm: 5, md: -20 }} maxWidth="xl" >
        {/* <div> */}
            {/* <Grid2 spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
                {exerciseCards}
            {/* </Grid2> */}
        {/* </div> */}
        </Grid2>
    )
}
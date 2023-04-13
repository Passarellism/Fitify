import React from "react";
import ExerciseCard from "./ExerciseCard";


export default function Exercises({exercise, setExercise}){
    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)

    return (
        <div>
            <ul>{exerciseCards}</ul>
        </div>
    )
}
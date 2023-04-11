import React from "react";
import ExerciseCard from "./ExerciseCard";


function Exercises({exercise, setExercise}){

    // console.log(exercise)

    const exerciseCards = exercise?.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} setExercise={setExercise}/>)

    return (
        <div>
            <ul className="cards">{exerciseCards}</ul>
        </div>
    )
}

export default Exercises;
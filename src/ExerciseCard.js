import React from 'react';
import { Link } from 'react-router-dom';
import SingleRound from './SingleRound';

function ExerciseCard({exercise}){

  // console.log(exercise.name)

    const { name, date, level, } = exercise;

    // console.log(exercise)

    return (
      <div className="card">
        <h1><SingleRound exercise={exercise} /></h1>
        <h3 className="name_and_level"> {name} </h3>
        {/* <h1><SingleRound exercise={exercise}/></h1> */}
      </div>
    );
  
}

export default ExerciseCard;
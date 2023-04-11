import React from 'react';
import { Link } from 'react-router-dom';
import SingleRound from './SingleRound';

function ExerciseCard({exercise}){

  // console.log(exercise.name)

    const { name, date, level, } = exercise;

    // console.log(name)

    return (
      <div className="card">
        <div className="image">
        </div>
        <div className="center">
          <h3 className="name_and_level"> {name} </h3>
          <SingleRound exercise={exercise}/>
        

        </div>
      </div>
    );
  
}

export default ExerciseCard;
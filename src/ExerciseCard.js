import React from 'react';
import { Link } from 'react-router-dom';
import SingleRound from './SingleRound';

function ExerciseCard({exercise}){

    const { name, date, level } = exercise;

    console.log(SingleRound)

    return (
      <li className="card">
        <div className="image">
          {/* <Link to={`/rounds/${id}`}> */}
            {/* <img src={image} alt={name} /> */}
            {/* <img /> */}
          {/* </Link> */}
        </div>
        <div className="center">
          <h3 className="name_and_level">{name} | {level}</h3>
          <SingleRound exercise={exercise}/>
          <p>{date}</p>
        </div>
      </li>
    );
  
}

export default ExerciseCard;
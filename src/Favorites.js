import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

export default function Favorites({ exercises }) {
    // const { id } = exercise
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [newFavoriteExercise, setNewFavoriteExercise] = useState(null);
    // const abc = 3
//   console.log(exercise)

    // console.log(favoriteExercises)
    if (newFavoriteExercise != null){
        setFavoriteExercises([...favoriteExercises, newFavoriteExercise]);
        setNewFavoriteExercise(null)
}

    console.log(newFavoriteExercise)
    console.log(favoriteExercises)

    // function handleAddFavorite(exercise){
    // console.log("add favorite function called with id:", exercise);
    // setFavoriteExercises([...favoriteExercises, exercise]);
    // }

    // console.log(handleAddFavorite)

//   function handleRemoveFavorite(exerciseId){
//     setFavoriteExercises(favoriteExercises.filter(exercise => exercise.id !== exerciseId));
//   };

  return (
    <div className="favorites">
      {exercises.map((exercise) => (
        <ExerciseCard 
          key={exercise.id} 
          exercise={exercise}
          setNewFavoriteExercise={setNewFavoriteExercise}
        //   onAddFavorite={handleAddFavorite} 
        //   onRemoveFavorite={handleRemoveFavorite} 
        />
      ))}
    </div>
  );
}

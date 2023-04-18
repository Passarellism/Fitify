import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

export default function Favorites({ user, exercise }) {
  const [favoriteExercises, setFavoriteExercises] = useState(user?.favoriteExercises || []);
  
  const handleToggleFavorite = (exercise_id) => {
      if (favoriteExercises.includes(exercise_id)) {
          setFavoriteExercises(favoriteExercises.filter((id) => id !== exercise_id));
        } else {
            setFavoriteExercises([...favoriteExercises, exercise_id]);
        }
    };
    
    // console.log(typeof handleToggleFavorite)

  return (
    <div>
      <h1>Favorites</h1>
      {user && favoriteExercises.length > 0 ? (
        favoriteExercises.map((exercise_id) => {
          const ex = exercise.find((ex) => ex.id === exercise_id);
          return (
            <ExerciseCard
                key={exercise_id}
                exercise={ex}
                isFavorited={favoriteExercises.includes(exercise_id)}
                handleToggleFavorite={handleToggleFavorite}
                exercise_id={exercise_id}
            />
          );
        })
      ) : (
        <p>No favorite exercises yet.</p>
      )}
    </div>
  );
}

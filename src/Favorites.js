// import React, { useState } from 'react';
// import ExerciseCard from './ExerciseCard';

// export default function Favorites({ user }) {
//   const [favoriteExercises, setFavoriteExercises] = useState(user?.favoriteExercises || []);

//   const handleToggleFavorite = (exerciseId) => {
//     console.log('toggle favorite called with exercise ID:', exerciseId);
//     if (favoriteExercises.includes(exerciseId)) {
//       setFavoriteExercises(favoriteExercises.filter((id) => id !== exerciseId));
//     } else {
//       setFavoriteExercises([...favoriteExercises, exerciseId]);
//     }
//   };

//   return (
//     <div>
//       <h1>Favorites</h1>
//       {user && favoriteExercises.length > 0 ? (
//         favoriteExercises.map((exerciseId) => (
//           <ExerciseCard
//             key={exerciseId}
//             exercise={exerciseId}
//             isFavorited={favoriteExercises.includes(exerciseId)}
//             onToggleFavorite={handleToggleFavorite}
//           />
//         ))
//       ) : (
//         <p>No favorite exercises yet.</p>
//       )}
//     </div>
//   );
// }

// import React from 'react';
// import ExerciseCard from './ExerciseCard';

// export default function Favorites({ user, setUser, exercise }) {
//   const favorites = user?.favorites ?? [];

//   const toggleFavorite = (id) => {
//     const index = favorites.indexOf(id);
//     if (index === -1) {
//       user.favorites = [...favorites, id];
//     } else {
//       user.favorites = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
//     }
//     // Force a re-render of the component
//     setUser({ ...user });
//   };

//   return (
//     <div>
//       <h1>Favorites</h1>
//       {exercise.map((ex) => {
//         const isFavorite = favorites.includes(ex.id);
//         return (
//           <ExerciseCard
//             key={ex.id}
//             exercise={ex}
//             isFavorite={isFavorite}
//             onToggleFavorite={() => toggleFavorite(ex.id)}
//           />
//         );
//       })}
//     </div>
//   );
// }

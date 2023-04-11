import React, { useState, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useHistory, useParams } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";



export default function Calendar({ exercise, user }) {
  // const { id } = user;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userExercise, setUserExercise] = useState([])
  // console.log(user)
  

  useEffect(() => {
    fetch('http://localhost:5555/userexercises').then((res) => res.json())
    .then((data) => {
      setUserExercise(data)
    })
  }, [])
      
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
      };

  const filteredUserExercises = userExercise.filter((userExercise) => {
    return userExercise.date === selectedDate.toISOString().slice(0, 10);
  });
  
  // const userExerciseComponents = filteredUserExercises.map((userExercise) => {
  //   return <ExerciseCard exercise={exercise} key={userExercise.id} />;
  // });

  console.log(filteredUserExercises)

  const userExerciseComponents = filteredUserExercises.map((userExercise) => {
    if (userExercise.user_id === user.id)
      return <ExerciseCard exercise={userExercise.exercise} key={exercise.id} />;
    // return true
  });
  
 

  return(
    <>
    <div className="calendar-card">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          selectedSections=" year, month, number"
          onChange={handleDateChange}
          />
      </LocalizationProvider>
      {userExerciseComponents}
    </div>
  </>
  )
}

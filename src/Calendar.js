import React, { useState, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useHistory, useParams } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";


export default function Calendar({ exercise }) {
  // const { id } = exercise;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userExercise, setUserExercise] = useState([])
  // console.log(exercise)
  
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
  
  const userExerciseComponents = filteredUserExercises.map((userExercise) => {
    return <ExerciseCard exercise={exercise} key={userExercise.id} />;
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

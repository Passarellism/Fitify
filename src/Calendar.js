import React, { useState, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useHistory, useParams } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import Box from '@mui/material/Box';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



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
  
 

return (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div className="calendar-card">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 600,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            orientation="landscape"
            selectedSections=" year, month, number"
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </Box>
    </div>
    <div>{userExerciseComponents}</div>
  </div>
);
}

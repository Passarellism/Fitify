import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddToCalendar({exercise}) {
    const [selectedDate, setSelectedDate] = useState("");
    const { id } = useParams();
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
          
    const filteredExercises = exercise.filter((exercise) => exercise.id === Number(id));

    const requestBody = {
        exercise_id: filteredExercises[0].id,
        date: selectedDate
    };
    
    fetch("/userexercises", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error creating user exercise: ${response.status}`);
        }
        return response.json();
    })
    .then(() => {
        history.push("/exercises");
    })
    .catch((error) => {
        console.error("Error creating user exercise:", error);
    });
};

const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
};

return (
    <div>
      <h1>Add to Calendar</h1>
      <form onSubmit={handleSubmit}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <label>
          Date:
          {/* <DatePicker label="Basic date picker" value={selectedDate} onChange={handleDateChange}/> */}
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </label>
        {/* </LocalizationProvider> */}
        <button type="submit">Add to Calendar</button>
      </form>
    </div>
  );
}


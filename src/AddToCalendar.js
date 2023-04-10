import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { useFormik } from "formik";

function AddToCalendar({exercise}) {
    const [selectedDate, setSelectedDate] = useState("");
    const { id } = useParams();
    const history = useHistory();
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        
    const filteredExercises = exercise.filter((exercise) => exercise.id === Number(id));

    // console.log(exercise.id)

    
    // const dateStr = formattedDate.toLocaleDateString("en-US");
    
    const requestBody = {
        user_id: 1, // replace with the actual user ID
        exercise_id: filteredExercises[0].id,
        date: selectedDate
    };
    
    console.log(filteredExercises[0].id)
    
    fetch("http://localhost:5555/userexercises", {
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
        history.push("/calendar");
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
        <label>
          Date:
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </label>
        <button type="submit">Add to Calendar</button>
      </form>
    </div>
  );
}


export default AddToCalendar;





























// const formik = useFormik({
//     enableReinitialize: true,
//     onSubmit: (values) => {
//         console.log(values)
//         fetch("http://localhost:5555/userexercises", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(requestBody)
//         })
//         .then((response) => {
//             if (!response.ok) {
//             throw new Error(`Error creating user exercise: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(() => {
//             history.push("/calendar");
//         })
//         .catch((error) => {
//             console.error("Error creating user exercise:", error);
//         });
//     }
// })

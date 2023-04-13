import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Movements from './Movements';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';



function MovementRound({round}){
    const [movementround, setMovementround] = useState([])
    const { id } = round;

    useEffect(() =>{
        fetch('/movementrounds').then((res) => res.json())
        .then((data) => {
        setMovementround(data);
        })
    }, [])

    
    const filteredMovementRounds = movementround.filter((movementround) => {
        if (movementround.round_id === round.id)
            return true
        else
            return false
    })


    const movementroundsToDisplay = filteredMovementRounds.map((movementround) => {
        return(
            <ul key={movementround.movement_id}>
                <div key={movementround.movement_id}>
                    <Movements movementround={movementround}/>
                </div>
                <Typography component="h1" variant="h5">
                    <ul>
                        <p>Weight: {movementround.weight}</p>
                        <p>Reps: {movementround.reps}</p>
                        <p>Sets: {movementround.sets}</p>
                    </ul>
                </Typography>
            </ul>
        )
    })

    return(
        // <Card variant="outlined">
            <div className="movementround">
            <div>{movementroundsToDisplay}</div>
                <div>
                    <Movements movementround={movementround} movement_id={movementround.movement_id} />
                </div>
            </div>
        // </Card>
    )
}

export default MovementRound;
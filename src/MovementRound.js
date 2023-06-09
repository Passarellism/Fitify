import { useEffect, useState } from "react";
import Movements from './Movements';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MovementRound({round}){
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
            <Box sx={{height: 80, mt:-2}}>
            <p key={movementround.movement_id}>
                <div key={movementround.movement_id}>
                    <Movements movementround={movementround}/> 
                </div>
                <Box sx={{width: 250, height:40, mt:-2,}}>
                    <ul>
                        <Typography component="h1" variant="body2" sx={{mt: -2,}}>
                            <p>Weight: {movementround.weight}</p>
                        </Typography>
                        <Typography component="h1" variant="body2" sx={{mt: -2,}}>
                            <p>Reps: {movementround.reps}</p>
                        </Typography>
                        <Typography component="h1" variant="body2" sx={{mt: -2,}}>
                            <p>Sets: {movementround.sets}</p>
                        </Typography>
                </ul>
                </Box>
            </p>
            </Box>
        )
    })

    return(
            <div className="movementround">
                <div>{movementroundsToDisplay}</div>
                <div>
                    <Movements movementround={movementround} movement_id={movementround.movement_id} />
                </div>
            </div>
    )
}
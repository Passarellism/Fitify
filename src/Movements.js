import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

function Movements({ movementround }){
    const [movement, setMovement] = useState([])
    const { movement_id } = movementround;

    useEffect(() => {
        fetch('/movements').then((res) => res.json())
        .then((data) => {
        setMovement(data)
        })
    }, [])

    const filteredMovements = movement.filter((movement) => {
        if (movement.id === movementround.movement_id)
            return true
        else
            return false
    })

    const movementToDisplay = filteredMovements.map((movement) => {
        return(
            <Typography component="h1" variant="body1">
            <div key={movement.id} >
                <p>{movement.name}</p>
            </div>
            </Typography>
        )
    })

    return(
        <div>{movementToDisplay}</div>
    )
}

export default Movements;
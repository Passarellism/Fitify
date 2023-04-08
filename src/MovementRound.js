import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Movements from './Movements';



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
        // console.log(movementround.movement_id, "BIG BOBS BEAN BOWL")
        if (movementround.round_id === round.id)
            return true
        else
            return false
    })


    const movementroundsToDisplay = filteredMovementRounds.map((movementround) => {
        return(
            <li key={movementround.movement_id}>
                <div key={movementround.movement_id}>
                    <Movements movementround={movementround}/>
                </div>
                <p>Weight: {movementround.weight}</p>
                <p>Reps: {movementround.reps}</p>
                <p>Sets: {movementround.sets}</p>
            </li>
        )
    })

    return(
        <div className="movementround">
        <ul>{movementroundsToDisplay}</ul>
        <div>
            <Movements movementround={movementround} movement_id={movementround.movement_id} />
        </div>
        </div>
    )
}

export default MovementRound;
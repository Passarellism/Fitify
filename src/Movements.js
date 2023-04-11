import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

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
        // console.log(movement.id, "how do i get this id")
        // console.log(movement_id)
        if (movement.id === movementround.movement_id)
            return true
        else
            return false
    })

    const movementToDisplay = filteredMovements.map((movement) => {
        return(
            <div key={movement.id} >
                <p>Name: {movement.name}</p>
            </div>
        )
    })

    return(
        <div>{movementToDisplay}</div>
    )
}

export default Movements;
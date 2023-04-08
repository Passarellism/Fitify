import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";


function SingleRound({user, exercise}){
    const[round, setRound]= useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    const { id } = exercise;
    // const{ id } = useParams()
    
    useEffect(() => {
            fetch(`/rounds`).then((r) => r.json())
            .then((round) => {
            setRound(round);
            setIsLoaded(true);
            })
            .catch((error) => console.log(error));
        }, []);

    
    if (!exercise) return <h1>Loading...</h1>;
    
    
    const { name, exercise_id} = round
    
    const filteredRounds = round.filter((round) => {
        console.log(id, "lkfjalhrewiquhfkjd,snabvkjdsahf")
        if (round.exercise_id === exercise.id)
            return true
        else
            return false
    })

    const roundsToDisplay = filteredRounds.map((round)=> {
        return(
        <li>
            <p>Name: {round.name}</p>
            {/* {user && user.id === round.user_id ? (
                <Link to={`/round/${round.id}/edit`}>
                <p className="linkToEdit">Edit Round</p>
                </Link>
            ) : null} */}
        </li>
        )
    });

    //const {climber_id, route_id, styleTick, date, notes } = tick
    // console.log(climber.id)
    // console.log(climber_id)
    // const addTick =
    // singleTick ? (
    //     <div>
    //         <p>Date Ticked: {singleTick.date}</p>
    //         <p>Style: {singleTick.styleTick}</p>
    //         <p>Notes: {singleTick.notes}</p>
    //     </div>
    // ) : null;

    return(
        <div className="single-round">
        <div className="single-nontext">
        </div>
        <div className="single-center">
        {/* <h3 className="single-name">{name}</h3> */}
        <ul>{roundsToDisplay}</ul>
        <div>
        {/* <Link to={`/rounds/${id}/addround`}>
        <button>Add Round</button>
        </Link> */}
        </div>
        <br />
        <button onClick={() => history.goBack()}>Back</button>
        </div>
            <ul className="review-cards"></ul>
        </div>
    );
}

export default SingleRound;
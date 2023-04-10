import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MovementRound from './MovementRound';
import AddToCalendar from './AddToCalendar';


function SingleRound({user, exercise}){
    const[round, setRound]= useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    const { id } = exercise;
    console.log(exercise.id, "lfhjdsahekjwbqrkejbwqfvfs")

    useEffect(() => {
            fetch(`/rounds`).then((r) => r.json())
            .then((data) => {
            setRound(data);
            setIsLoaded(true);
            })
            .catch((error) => console.log(error));
        }, []);

    
    if (!exercise) return <h1>Loading...</h1>;
    
    const filteredRounds = round.filter((round) => {
        // console.log(round.id)
        if (round.exercise_id === exercise.id)
            return true
        else
            return false
    })

    const roundsToDisplay = filteredRounds.map((round)=> {
        return(
        <li key={round.id}>
            <p>Name: {round.name}</p>
            <div key={round.id}>
                <MovementRound round={round} />
            </div>
            {/* {user && user.id === round.user_id ? (
                <Link to={`/round/${round.id}/edit`}>
                <p className="linkToEdit">Edit Round</p>
                </Link>
            ) : null} */}
        </li>
        )
    });

    return(
        <div className="single-round">
        <div className="single-nontext">
        </div>
        <div className="single-center">
        <ul>{roundsToDisplay}</ul>
        <div>
        <MovementRound round={round} />
        {/* <Link to={`/rounds/${id}/addround`}>
        <button>Add Round</button>
        </Link> */}
        </div>
        <br />
        <button onClick={() => history.goBack()}>Back</button>
        <Link to={`/exercise/${exercise.id}/addtocalendar`}>
            <button exercise={exercise}> add to cal </button> 
        </Link>
        </div>
            <ul className="review-cards"></ul>
        </div>
    );
}

export default SingleRound;
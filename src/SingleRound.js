import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MovementRound from './MovementRound';


function SingleRound({user, exercise}){
    const[round, setRound]= useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    const { id } = exercise;
    

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
        console.log(round.id)
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
        {/* <h3 className="single-name">{name}</h3> */}
        <ul>{roundsToDisplay}</ul>
        <div>
        <MovementRound round={round} />
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
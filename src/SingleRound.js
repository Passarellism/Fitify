import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MovementRound from './MovementRound';
import AddToCalendar from './AddToCalendar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function SingleRound({user, exercise}){
    const[round, setRound]= useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

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
        if (round.exercise_id === exercise.id)
            return true
        else
            return false
    })

    const roundsToDisplay = filteredRounds.map((round)=> {
        return(
            <Card variant="outlined" className="card" sx={{ mt: 0, py: 1 }}>
                {/* <div key={round.id}> */}
                    <Typography component="h1" variant="h6" sx={{ mb: -3 }}>
                        {round.name} 
                    </Typography>
                    <MovementRound round={round} />
                {/* </div> */}
            </Card>
        )
    });

    return(
        <card variant="outlined" className="card">
                <div className="single-round">
                        </div>
                    <div className="single-center">
                    <Typography component="h1" variant="h5" >
                        {roundsToDisplay}
                            <MovementRound round={round} exercise={exercise} />
                            {/* <Link to={`/rounds/${id}/addround`}>
                            <button>Add Round</button>
                            </Link> */}
                    </Typography>
                    {/* <Button variant="contained" onClick={() => history.goBack()}>Edit</Button> */}
                    <Link to={`/exercise/${exercise.id}/addtocalendar`}>
                        <Button variant="contained" exercise={exercise}> Add to Calendar </Button> 
                    </Link>
                    </div>
        </card>
    );
}

import React from 'react';
import SingleRound from './SingleRound';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ExerciseCard({exercise}){
  const { name, level, } = exercise;

  return (
    <div className="cards">
      <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 350,
        height: 2600,
      }}
      >
        <Card variant="outlined" className="card">
          <Typography component="h2" variant="h5">
            {name} | {level} 
          </Typography>
          <Typography component="h3" variant="body2"
            sx={{
              margin: 2,
            }}>
            <SingleRound exercise={exercise} />
          </Typography>
        </Card>
      </Box>
    </div>
  );
  
}
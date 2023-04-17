import React, { useState } from 'react';
import SingleRound from './SingleRound';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Item from '@mui/material/Item';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

export default function ExerciseCard({exercise}){
  const { name, level, } = exercise;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <div className="cards">
      <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 390,
        height: 2600,
      }}
      >
        <Card variant="outlined" className="card" sx={{ width: 375 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Steve">
                PO
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader={level}
          />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          DESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTION
          DESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTION
          DESCRIPTIONDESCRIPTIONDESCRIPTIONDESCRIPTION
          </Typography>
        </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography component="h3" variant="body2" sx={{margin: 2,}}>
                <SingleRound exercise={exercise} />
              </Typography>
              </Collapse>
        </Card>
      </Box>
    </div>
  );
  
}
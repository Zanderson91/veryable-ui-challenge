import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import '../card/card.css'
import { useState, useEffect } from 'react';

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

export default function NoteCard({note}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <div>
        <Card>
          <CardHeader
          avatar={
            <PersonIcon fontSize="large">
            </PersonIcon>
            }
            action={
             <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              >
              <ExpandMoreIcon />
            </ExpandMore>
            }
            title={note.firstName}
            subheader={note.role}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
   <Typography paragraph></Typography>
          
   <div className="title">Phone:</div>
   <div>{note.phone}</div>
   <Typography paragraph>Created At:</Typography>
   <div>{note.createdAt}</div>
   <Typography paragraph>Last Logged In:</Typography>
   <div>{note.lastLoggedIn}</div>
   </CardContent>
  </Collapse>
        </Card>
      </div>
    )
          }
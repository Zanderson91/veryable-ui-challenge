import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import '../card/card.css'
import './noteCard.css'

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
         <span className="title">Address:</span>
   <div>
   <span className="details">{note.street}, {note.city}, {note.state}</span>
   </div>
   <div className="space" />        
   <span className="title">Phone:</span>
   <div>
   <span className="details">{note.phone}</span>
   </div>
   <div className="space" />
   <span className="title">Created At:</span>
   <div>
    <span className="details">{note.createdAt}</span>
    </div>
    <div className="space" />
    <span className="title">Last Logged In:</span>
    <div/>
   <span className="details">{note.lastLoggedIn}</span>
   </CardContent>
  </Collapse>
        </Card>
      </div>
    )
          }
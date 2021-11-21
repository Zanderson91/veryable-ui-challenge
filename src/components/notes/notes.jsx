import React, {useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Grid';
import UserCard from '../card/card';
import Paper from '@material-ui/core/Paper'
import NoteCard from './noteCard';

export default function Notes() {
    const [notes, setNotes] = useState([])


useEffect(() =>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setNotes(data))
}, [])

return (
    <Container>
        <Grid container>
        {notes.map(note => (
            <Grid item key={note.id} xs={10} md={10} lg={10}>
<NoteCard note={note} />               
 </Grid>
        ))}
        </Grid>
    </Container>
)
}
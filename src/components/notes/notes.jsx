import React, {useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';


export default function Users() {
    const [users, setUser] = useState([])


useEffect(() =>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUser(data))
}, [])

return (
    <div>
        <Grid container>
        {users.map(user => (
            <Grid item key={user.id} xs={12} md={6}>
                <Card>{user.firstName}</Card>
                </Grid>
        ))}
        </Grid>
    </div>
)
}
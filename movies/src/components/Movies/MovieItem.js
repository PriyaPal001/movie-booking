import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';


const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card sx={{
      margin: 5,
      width: 250,
      height: 500,
      borderRadius: 5,
      transition: 'all 0.3s ease-in-out',
      ":hover": {
        boxShadow: '10px 10px 20px #ccc',
        transform: 'translate(-5px,-5px)',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: '#94FAFF',
        border: '1px solid #1736FF',
      },
    }}  >
      <img
        height={'50%'}
        width="100%"
        src={posterUrl} alt={title} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} to={`/booking/${id}`} size="small">Book Now</Button>

      </CardActions>
    </Card>
  )
}

export default MovieItem


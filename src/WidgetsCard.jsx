import React from 'react'
import './WidgetsCard.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function WidgetsCard({
    displayName,
    userName,
    avatar
}) {
  return (
    <div className='card'>
        <div className="card__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="card__names"> 
            <h3 className='name'>{displayName} </h3>
            <h3 className='tag'>@{userName}</h3>
        </div>
        <Button variant="contained" className='cardButton'>Follow</Button>
    </div>
  )
}

export default WidgetsCard
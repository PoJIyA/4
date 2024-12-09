import React from 'react'
import './FeedHeader.css'

function FeedHeader({active, text}) {
  return (
    <div className={`feedHeader ${active && 'feedHeader--active'}`}>
        <h2>{text}</h2>
    </div>
  )
}

export default FeedHeader
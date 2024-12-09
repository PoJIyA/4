import React from 'react'
import './FeedPost.css'
import Avatar from '@mui/material/Avatar';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ImageComponent from './ImageComponent';

function FeedPost({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3 className='name'>
                        {displayName} 
                    </h3>
                    <span>{verified && <VerifiedRoundedIcon className='post_badge'/>}</span>
                    <h3 className='post__headerSpecial'>@{userName}</h3>
                    
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <ImageComponent image={image} />
            <div className="post__footer">
                <ChatBubbleOutlineRoundedIcon fontSize="small"/>
                <RepeatRoundedIcon fontSize="small"/>
                <FavoriteBorderRoundedIcon fontSize="small"/>
                <SignalCellularAltRoundedIcon fontSize="small"/>
                <div className="lastIcons">
                <BookmarkBorderRoundedIcon fontSize="small"/>
                <FileUploadOutlinedIcon fontSize="small"/>
                </div>
            </div>
        </div>
    </div>
  )
}




export default FeedPost
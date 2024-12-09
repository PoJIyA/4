import React, {useState} from 'react'
import "./FeedTweetBox.css"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FeedTweetBoxIcon from './FeedTweetBoxIcon'
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import GifBoxRoundedIcon from '@mui/icons-material/GifBoxRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import db from './Firebase'
import { Verified } from '@mui/icons-material';





function FeedTweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Polina Nagorskaia",
      userName: "APaulirique",
      verified: true,
      avatar: "https://i.ibb.co/cJ2rf49/ID.png",
      text: tweetMessage,
      image: tweetImage,
      timestamp: new Date(),
    });

    addPostToFeed({ id: docRef.id, ...newPost });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar alt="Remy Sharp" src="img/ID.png"/>
                <div className='inputs'>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type='text' 
                className='inputFeed'>
                </input>

                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder='Image URL' type="text"/>
                </div>
            </div>
            <div className="tweetBox__post">
                <div className="icons">
                <FeedTweetBoxIcon Icon={InsertPhotoRoundedIcon}/>
                <FeedTweetBoxIcon Icon={GifBoxRoundedIcon}/>
                <FeedTweetBoxIcon Icon={BallotRoundedIcon}/>
                <FeedTweetBoxIcon Icon={EmojiEmotionsRoundedIcon}/>
                <FeedTweetBoxIcon Icon={EventNoteRoundedIcon}/>
                <FeedTweetBoxIcon Icon={LocationOnRoundedIcon}/>
                </div>
            <Button onClick={sendTweet} type="submit" variant="contained" className='postButton'>Post</Button>
            </div>
        </form>
    </div>
  )
}

export default FeedTweetBox
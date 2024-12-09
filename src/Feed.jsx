import React, {useState, useEffect} from 'react'
import './Feed.css'
import FeedHeader from './FeedHeader'
import FeedTweetBox from './FeedTweetBox'
import FeedPost from './FeedPost'
import db from './Firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect (() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  const addPostToFeed = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="feed">
        
      {/* Header */}
      <div className="feed__header">
          <FeedHeader active text="For you"/>
          <FeedHeader text="Following"/>
      </div>
      {/* TweetBox */}
      <FeedTweetBox />

      {posts.map (post =>(
        <FeedPost 
        displayName={post.displayName}
        userName={post.userName}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
      {/* Post */}
      {/* <FeedPost displayName={"Elon Musk"} userName={"elonmusk"} verified text={"Check the new Tesla we made"} image={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZkbnZwMXNtdnJ5bXZvaG1hd3NjdXI5MTM2cjcwY2tqM2VocmRhNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/darAMUceRAs0w/giphy.gif"} avatar={"img/elon2.jpg"}/> */}
      {/* <FeedPost displayName={"Joe Biden"} userName={"joebiden"} verified text={"My fellow americans..."} image={"https://media.giphy.com/media/1dH4A6zrnVHHGyXcCb/giphy.gif?cid=790b761176k0qr01ajs299m7ovxp13j0hcpccsiwrr9avwjv&ep=v1_gifs_search&rid=giphy.gif&ct=g"} avatar={"img/biden.webp"}/>
      <FeedPost displayName={"Polina Nagorskaia"} userName={"polinanagorskaia"} text={"Me reading the X feed be like"} image={"https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=790b7611mg5crq0p0jns2nn45j059wflfioibeayizpb6m0f&ep=v1_gifs_search&rid=giphy.gif&ct=g"} avatar={"img/ID.png"}/>
      <FeedPost displayName={"John Doe"} userName={"johndoe"} text={"Lorem ipsum"} image={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJjZWw2Mzk0dGo3Z3R6dmxmamF5ZWVoOHo1NmgxamdhaGcydmNqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aeKDyV2fsoJ4Q/giphy.gif"} avatar={"img/1.jpg"}/> */}
    </div>
  )
}

export default Feed
import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data())) // fetch doc.id here for key
        ))
    },[])
    return (
        <div className="feed">
            {/*Header */}
            <div className="feed__header">
                <span className="feed__headerContainer">
                    <h2>Home</h2>
                    <span className="feed__modeIcon"><FlareOutlinedIcon font-size="small" /></span>
                </span>
            </div>
            {/* Tweetbox */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
            {posts.map(post =>(
                <Post 
                key = {post.text} // use document id after wards
                 displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
            />))}
            </FlipMove>
        </div>
    )
}

export default Feed;

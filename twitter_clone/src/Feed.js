import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
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
            {posts.map(post =>(
                <Post displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
            />))}
            
        </div>
    )
}

export default Feed;

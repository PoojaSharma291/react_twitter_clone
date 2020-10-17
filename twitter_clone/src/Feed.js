import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import Post from './Post';

function Feed() {
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
            <Post />
            {/* Post */}
            <Post />
            {/* Post */}
            <Post />
            {/* Post */}
            <Post />
            {/* Post */}

            {/* Post */}

            {/* Post */}

            {/* Post */}
        </div>
    )
}

export default Feed;

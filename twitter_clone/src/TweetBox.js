import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import db from './firebase';

function TweetBox(props) {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Pooja Gogia",
            username: "sgogia",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "assets/images/sg.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="assets/images/codersCookbook.jpg">PS</Avatar>
                    <input onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage}
                    className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
                <div className="tweetBox_buttonContainer">
                    <span className="tweetBox_buttonIcons">
                        <ImageOutlinedIcon fontSize="small" />
                        <GifOutlinedIcon fontSize="small" />
                        <PollOutlinedIcon fontSize="small" />
                        <SentimentSatisfiedOutlinedIcon fontSize="small" />
                        <ScheduleOutlinedIcon fontSize="small" />
                    </span>
                    <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
                </div>


            </form>
        </div>
    )
}

export default TweetBox;
import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

function TweetBox(props) {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="assets/images/codersCookbook.jpg">PS</Avatar>
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
                <div className="tweetBox_buttonContainer">
                    <span className="tweetBox_buttonIcons">
                        <ImageOutlinedIcon fontSize="small" />
                        <GifOutlinedIcon fontSize="small" />
                        <PollOutlinedIcon fontSize="small" />
                        <SentimentSatisfiedOutlinedIcon fontSize="small" />
                        <ScheduleOutlinedIcon fontSize="small" />
                    </span>
                    <Button className="tweetBox__tweetButton">Tweet</Button>
                </div>


            </form>
        </div>
    )
}

export default TweetBox;
import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post(props) {
    // {displayName, username, verified, timestamp, text, image, avatar} -- These properties of Post we will get from props
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="assets/images/usTravelBugs.jpg"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Pooja Sharma Gogia {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>
                            </span>
                            <span className="post__headerSpecial">@psgogia</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is not original twitter !! Beware !!</p>
                    </div>
                </div>
                <img className="post__image" src="https://media1.tenor.com/images/73dda3a7a549f12b2c43412b1246e37b/tenor.gif?itemid=10994492" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon >
                    </ChatBubbleOutlineIcon>
                    <RepeatIcon></RepeatIcon>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <PublishIcon></PublishIcon>
                </div>
            </div>

        </div>
    )
}

export default Post;

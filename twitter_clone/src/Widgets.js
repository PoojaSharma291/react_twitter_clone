import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__ssearchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1294985545446068225"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="CookbookCoders" options={{ height: 500 }} />
                <TwitterShareButton url={"https://www.youtube.com/user/Zoyomo"} options={{ text: "#Baking is fun #withUs #Subscribe #Now to Coders Cookbook youtube channel", via: "CookbookCoders" }} />
            </div>
        </div>
    )
}

export default Widgets;

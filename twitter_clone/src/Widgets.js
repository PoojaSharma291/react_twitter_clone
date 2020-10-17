import React from 'react';
import "./Widgets.css";
import {
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterMomentShare,
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
                <TwitterTimelineEmbed sourceType="profile" screenName="CookbookCoders" options={{ height: 500 }} />
                <TwitterTweetEmbed tweetId={"1294985545446068225"} />
                <TwitterShareButton url={"https://www.youtube.com/user/Zoyomo"}
                    options={{ text: "#Baking is fun #withUs #Subscribe #Now to Coders Cookbook youtube channel", via: "CookbookCoders" }} />
                <TwitterMentionButton
                    screenName={'CookbookCoders'}
                />
                <TwitterHashtagButton
                    tag={'LearningReact'}
                />
                <TwitterFollowButton
                    screenName={'CookbookCoders'}
                />
                <TwitterMomentShare
                    momentId={'650667182356082688'}
                />
            </div>
        </div>
    )
}

export default Widgets;

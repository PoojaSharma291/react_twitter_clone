import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
/* Material UI Icons */
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className = "setColor"/>
            {/* SidebarOptions */}
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={SearchIcon} text="Explore" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={ListAltIcon} text="Lists" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
            {/* SidebarOptions */}
            <SidebarOptions Icon={RemoveCircleIcon} text="More" />
            {/* Button Tweet */}


        </div>
    )
}

export default Sidebar;

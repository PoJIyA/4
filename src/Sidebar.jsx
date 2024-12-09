import React from "react";
import './Sidebar.css'
import XIcon from '@mui/icons-material/X';
import SidebarOption from "./SidebarOption";
import SidebarProfile from "./SidebarProfile";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Button from '@mui/material/Button';

function Sidebar() {
    const [route, setRoute] = React.useState("/");
    return (
        <div className="side">
        <div className="sidebar">
            {/* Twitter icons */}
            <XIcon className="sideBar_XIcon"/>
            <SidebarOption active={route === "/"}  Icon={HomeRoundedIcon} text="Home" path="/" handleClick={setRoute} />
            <SidebarOption active={route === "/explore"} Icon={SearchRoundedIcon} text="Explore" path="/explore" handleClick={setRoute} />
            <SidebarOption active={route === "/notifications"} Icon={NotificationsNoneRoundedIcon} text="Notifications" path="/notifications" handleClick={setRoute} />
            <SidebarOption Icon={MailOutlineRoundedIcon}  text="Messages"/>
            <SidebarOption Icon={BookmarkBorderRoundedIcon} text="Bookmarks"/>
            <SidebarOption Icon={WorkOutlineRoundedIcon} text="Jobs"/>
            <SidebarOption Icon={PeopleOutlineRoundedIcon} text="Communities"/>
            <SidebarOption Icon={XIcon} text="Premium"/>
            <SidebarOption Icon={FlashOnRoundedIcon} text="Verified Orgs"/>
            <SidebarOption Icon={PersonOutlineRoundedIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizRoundedIcon} text="More"/>

            <Button variant="contained" className="sideBar_post">Post</Button>
            </div>
        
            <SidebarProfile img="img/ID.png" name="Polina Nagorskaia" tag="@PolinaNagorskaia"/>

            {/* Button -> Tweet */}
            
        </div>
    )
}

export default Sidebar;
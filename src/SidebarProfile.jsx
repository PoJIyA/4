import React from 'react'
import './SidebarProfile.css'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

function SidebarProfile({img,name,tag}) {
  return (
    <div className='sidebarProfile'>
        <img src={img} ></img>
        <div className='sidebarProfile_Name'>
            <p className='name'>{name}</p>
            <p className='tag'>{tag}</p>
        </div>
        <MoreHorizRoundedIcon className='more_icon'/>
    </div>
  )
}

export default SidebarProfile
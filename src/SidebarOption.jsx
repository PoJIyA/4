import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon, handleClick, path }) {
  return (
    <div onClick={() => handleClick(path)} className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon className="sidebarOption_Icon"/>
        <h2 className="sidebarOption_Text">{text}</h2>
    </div>
  )
}

export default SidebarOption
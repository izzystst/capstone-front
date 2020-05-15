import React from 'react'
import '../index.css'

export default function Header(props) {
  const headerStyle = {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  return(
    <nav style={headerStyle}>
    <div className='auth'>
  <p>
	 Logged in as <span className="fake-link" onClick={props.userInfo}>{props.email}.&nbsp;</span>
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
   </p>
   </div>
    <div className='header'>
    <span className='fake-link' onClick={props.ShowMap}> Where? </span>
    <span className='fake-link' onClick={props.newPost}> Add Today </span>
    <span className='fake-link' onClick={props.UsersPost}> Your Past </span>
    <span className='fake-link' onClick={props.allPosts}> Everyone's Past</span>
    <span className='fake-link' onClick={props.getCommonWords}> Commonality </span>
    </div>

    </nav>
    
  )
}
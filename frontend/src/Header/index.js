import React from 'react'
import '../index.css'

export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  return(
    <nav style={headerStyle}>
    <span className='fake-link' onClick={props.showMap}> Where? </span>
    <span className='fake-link' onClick={props.newPost}> Add Today </span>
    <span className='fake-link' onClick={props.UsersPost}> Your Past </span>
    <span className='fake-link' onClick={props.allPosts}> Everyone's Past</span>

	<p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p>
    </nav>
  )
}
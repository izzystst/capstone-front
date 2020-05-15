import React from 'react'
const moment = require('moment');

export default function UsersPostList(props) {
	// console.log("props in post list")
	// console.log(props)
	// const today = new Date()
	// console.log(today)
	// const TodayDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
	// console.log(TodayDate)
	const posts = props.posts.reverse().map(post=>{
		return(
			<div className="posts" key={post.id}>
		
			<p>{post.text}</p>
			<h2 className="date">{moment(post.date).calendar()}</h2>
			</div>
			)
	})
	return(
		<div>
		User's Posts
		{posts}
		</div>
		)

}
import React from 'react'
const moment = require('moment');
export default function PostList(props) {
	// console.log("props in post list")
	// console.log(props)
	const today = new Date()
	// console.log(today)
	// const TodayDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
	// console.log(TodayDate)
	const posts = props.posts.map(post=>{
		return(
			<div key={post.id}>

			<h2>{moment(post.date).calendar()}</h2>
			<p>{post.text}</p>
			<img src={post.image} />
			</div>
			)
	})
	return(
		<div>
		{posts}
		</div>
		)

}
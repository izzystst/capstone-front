import React from 'react'
const moment = require('moment');
export default function ImagesOnly(props) {
	// console.log("props in post list")
	// console.log(props)
	const today = new Date()
	// console.log(today)
	// const TodayDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
	// console.log(TodayDate)
	const posts = props.posts.reverse().map(post=>{
		return(
			<div className="posts" key={post.id}>

			<h2>{moment(post.date).format("dddd MMM Do YYYY")}</h2>
			<p>{post.text}</p>
			<img src={post.image} />
			</div>
			)
	})
	return(
		<div>
		<h1>Everyones Days</h1>
		{posts}
		</div>
		)

}
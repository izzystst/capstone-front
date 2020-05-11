import React from 'react'

export default function UsersPostList(props) {
	// console.log("props in post list")
	// console.log(props)
	// const today = new Date()
	// console.log(today)
	// const TodayDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
	// console.log(TodayDate)
	const posts = props.posts.map(post=>{
		return(
			<div key={post.id}>
		
			<h2>{post.date}</h2>
			<p>{post.text}</p>
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
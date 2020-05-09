import React from 'react'

export default function PostList(props) {
	console.log("props in post list")
	console.log(props)
	const posts = props.posts.map(post=>{
		return(
			<div key={post.id}>
			<h2>{post.date.date()}</h2>
			<p>{post.text}</p>
			</div>
			)
	})
	return(
		<div>
		{posts}
		</div>
		)

}
import React from 'react'
import { useSelector } from 'react-redux'

const PostLists = () => {

    const posts = useSelector(state => state.posts)

    return (
        <>
            <ul className="list-group">
                {posts.map(post => (
                    <div className="list-group-item" key={post.id}>
                        <h5 className="list-group-item-heading">{post.title}</h5>
                        <p className="list-group-item-text">{post.body}</p>
                    </div>
                ))}
            </ul>

        </>
    )
}

export default PostLists
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'

export const PostsList = () => {
    const dispatch = useDispatch()
    const { items, status, error } = useSelector(state => state.posts)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())
        }
    }, [dispatch, status])

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Error: {error}</p> 

    return (
        <div className="posts-list">
            {items.slice(0, 10).map(post => (
                <article key={post.id} className="post-card">
                    <span className="post-id">#{post.id}</span>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    )
}

import React from 'react';
import Post from '../post/Post.js';
import'./Posts.css';

class Posts extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            posts:props.posts
        }
    }
    render()
    {
        return(
            <div>
                {
                    //typeof(this.state.posts)
                    this.state.posts.map
                    (
                        post=>
                        (
                            <Post key={post.id} title={post.title} content={post.content}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Posts;
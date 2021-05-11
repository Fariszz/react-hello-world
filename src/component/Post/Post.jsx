import React, { Fragment } from 'react';

const Post = (props) => {
    return(
        <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="post">
                <div className="img-thumb">
                    <img src="http://placeimg.com/200/150/tech" alt=""/>
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;
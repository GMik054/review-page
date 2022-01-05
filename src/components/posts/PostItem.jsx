import React, {useState} from 'react';
import "../../styles/App.css";

const PostItem = (props) => {


    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.desc}
                    </div>
                </div>
                <div className="post__btns">
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
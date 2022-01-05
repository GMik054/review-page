import React, {useState} from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) =>{


    return(
        <div>
            <h1>Post's</h1>

            {posts.map((post)=>
                <PostItem post={post} key={post.id}/>
            )}

        </div>
    )
}

export default PostList;

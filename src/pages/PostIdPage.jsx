import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1> Post Number {params.id}</h1>
            {isLoading ? <Loader/> : <div>{post.title}</div>}
            <br/><br/>
            <h3>Comments</h3>
            {isComLoading ? <Loader/> : <div> {comments.map(comm =>
                <div style={{marginTop: 15}}>
                    <h4>{comm.name}</h4>
                    <h6>{comm.email}</h6>
                    <div>{comm.body}</div>
                    </div>
                    )}
                    </div>}

                </div>
            );
            };

                export default PostIdPage;
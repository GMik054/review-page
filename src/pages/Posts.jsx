import React, {useEffect, useState} from "react";
import "../styles/App.css"
import {usePost} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/posts/PostForm";
import PostFilter from "../components/posts/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/posts/PostList";
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortAndSearchPosts = usePost(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }


    const removePost = (remove) => {
        setPosts(posts.filter(p => p.id !== remove.id));
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page);
    }

    return (
        <div>
            <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>Add New Post</MyButton>

            <br/>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <br/>

            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError && <h1>error ${postError}</h1>
            }

            {
                isPostsLoading ?
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                        <Loader/>
                    </div> :
                    <PostList remove={removePost} posts={sortAndSearchPosts} title="Post's"/>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />


        </div>
    );
}

export default Posts;

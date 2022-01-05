import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = (props) => {

    const [post, setPost] = useState(
        {
            title: "",
            desc: ""
        })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }

        props.create(newPost)
        setPost({title: "", desc: ""})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                onChange={event => setPost(
                    {
                        ...post,
                        title: event.target.value
                    }
                )}
                type="text"
                placeholder={"Type title"}
            />
            <MyInput
                value={post.desc}
                onChange={event => setPost(
                    {
                        ...post,
                        desc: event.target.value
                    }
                )}
                type="text"
                placeholder={"Type description"}
            />
            <MyButton onClick={addNewPost}>Add</MyButton>
        </form>
    );
};

export default PostForm;
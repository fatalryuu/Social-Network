import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {useForm} from "react-hook-form";

const MyPosts = (props) => {
    const {register, handleSubmit} = useForm();
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)

    const onSubmit = (d) => {
        props.addPost(d.post);
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.text}>My posts</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.newPost}>
                    <div>
                        <textarea {...register("post")}></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </form>
        </div>
    );
};

export default MyPosts;
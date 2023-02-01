import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {PostType} from "../../../types/types";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = ({posts, addPost}) => {
    const {register, handleSubmit, reset} = useForm();
    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)

    const onSubmit = (d: any) => {
        addPost(d.post);
        reset();
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.text}>My posts</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.newPost}>
                    <div>
                        <textarea {...register("post", {required: true})}></textarea>
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
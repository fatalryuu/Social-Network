import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, getProfileSelector} from "../../../redux/selectors";
import {actions} from "../../../redux/profileReducer";
import {AppDispatch} from "../../../redux/store";

const MyPosts: React.FC = () => {
    const {register, handleSubmit, reset} = useForm();
    const profile = useSelector(getProfileSelector);
    const posts = useSelector(getPosts);
    const dispatch: AppDispatch = useDispatch();
    let postsElements = posts.map(p => <Post postInfo={p} key={p.id} last={posts.length}/>).reverse();

    const onSubmit = (d: any) => {
        dispatch(actions.addPost(d.post));
        reset();
    }

    return (
        <div className={s.posts_block}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.newPost}>
                    <div>
                        <input type="text" placeholder="Type here..." autoComplete="off" {...register("post", {required: true})}/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.text}>{profile?.fullName}'s posts</div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </form>
        </div>
    );
};

export default MyPosts;
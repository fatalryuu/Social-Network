import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/post_avatar.png'
import {PostType} from "../../../../types/types";

type PropsType = {
    postInfo: PostType
    last: number
}

const Post: React.FC<PropsType> = ({postInfo, last}) => {
    return (
        <div className={postInfo.id + 1 !== last ? s.post_wrapper : s.first_post}>
            <div className={s.upper}>
                <a href=""><img src={avatar} alt=""/></a>
                <div className={s.writer_info}>
                    <div><a href="">{postInfo.name}</a></div>
                    <div>{postInfo.date}</div>
                </div>
            </div>
            <div>{postInfo.message}</div>
            <div>
                <span>like count: {postInfo.likesCount}</span>
            </div>

        </div>
    );
};

export default Post;
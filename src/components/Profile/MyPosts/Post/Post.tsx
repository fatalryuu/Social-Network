import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/post_avatar.png'

type PropsType = {
    message: string
    likes: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={avatar} alt=""/>
                {props.message}
                <div>
                    <span>like count: {props.likes}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
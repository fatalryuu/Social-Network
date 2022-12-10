import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/post_avatar.png'

const Post = (props) => {
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
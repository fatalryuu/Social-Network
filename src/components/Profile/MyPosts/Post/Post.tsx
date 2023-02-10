import React, {useState} from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/post_avatar.png'
import {PostType} from "../../../../types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';

type PropsType = {
    postInfo: PostType
    last: number
}

const Post: React.FC<PropsType> = ({postInfo, last}) => {
    const [likes, setLikes] = useState(postInfo.likesCount);
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        if (isLiked)
            setLikes(likes - 1);
        else
            setLikes(likes + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className={postInfo.id + 1 !== last ? s.post_wrapper : s.first_post}>
            <div className={s.upper}>
                <a href=""><img src={postInfo.avatarUrl === null ? avatar : postInfo.avatarUrl} alt=""/></a>
                <div className={s.writer_info}>
                    <div><a href="">{postInfo.name}</a></div>
                    <div>{postInfo.date}</div>
                </div>
            </div>
            <div>{postInfo.message}</div>
            <div>
                <span className={s.wrap}>
                    <FavoriteIcon style={isLiked ? {color: "red", cursor: "pointer"} : {color: "white", cursor: "pointer"}} onClick={handleClick}/>
                    <span className={s.string}>{likes}</span>
                </span>
            </div>

        </div>
    );
};

export default Post;
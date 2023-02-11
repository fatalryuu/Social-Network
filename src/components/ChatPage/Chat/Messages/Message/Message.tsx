import React from 'react';
import s from '../../../ChatPage.module.css'
import {ChatMessageType} from "../../../../../api/chat-api";
import avatar from '../../../../../img/post_avatar.png'
import {NavLink} from "react-router-dom";

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div className={s.message}>
            <div className={s.message_header}>
                <NavLink to={`/profile/${message.userId}`}><img src={message.photo !== null ? message.photo : avatar}
                                                                alt=""/></NavLink>
                <div className={s.name_message}>
                    <NavLink to={`/profile/${message.userId}`}><b>{message.userName}</b></NavLink>
                    <div className={s.message_text}>{message.message}</div>
                </div>
            </div>
        </div>
    );
};

export default Message;
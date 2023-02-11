import React from 'react';
import s from '../../../ChatPage.module.css'
import {ChatMessageType} from "../../../../../api/chat-api";
import avatar from '../../../../../img/post_avatar.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/store";

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    const authID = useSelector((state: AppStateType) => state.auth.userID);
    const profileURL = '/profile' + (message.userId !== authID ? '/' + message.userId.toString() : '');
    return (
        <div className={s.message}>
            <div className={s.message_header}>
                <NavLink to={profileURL}><img
                    src={message.photo !== null ? message.photo : avatar}
                    alt=""/></NavLink>
                <div className={s.name_message}>
                    <NavLink
                        to={profileURL}><b>{message.userName}</b></NavLink>
                    <div className={s.message_text}>{message.message}</div>
                </div>
            </div>
        </div>
    );
};

export default Message;
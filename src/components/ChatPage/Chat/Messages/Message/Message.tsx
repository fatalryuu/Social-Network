import React from 'react';
import s from '../../../ChatPage.module.css'
import {ChatMessageType} from "../../../../../api/chat-api";

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div className={s.message}>
            <img src={message.photo} alt="" style={{width: "30px"}}/>
            <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
};

export default Message;
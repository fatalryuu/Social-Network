import React, {useEffect, useRef} from 'react';
import Message from "./Message/Message";
import {ChatMessageType} from "../../../../api/chat-api";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store";
import s from '../../ChatPage.module.css'

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);
    debugger;
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesAnchorRef.current?.scrollIntoView(true);
    }, [messages]);
    return (
        <div className={s.messages}>
            {messages.map((m: ChatMessageType, index: number) => <Message message={m} key={index}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

export default Messages;
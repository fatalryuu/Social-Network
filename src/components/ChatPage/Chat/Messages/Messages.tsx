import React, {useEffect, useState} from 'react';
import Message from "./Message/Message";
import {ChatMessageType} from "../../../../api/chat-api";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store";

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {messages.map((m: ChatMessageType, index: number) => <Message message={m} key={index}/>)}
        </div>
    );
};

export default Messages;
import React, {useEffect, useState} from 'react';
import Message from "./Message/Message";
import {ChatMessageType} from "../../../../api/chat-api";

const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        };
        wsChannel?.addEventListener('message', messageHandler);
        return () => {
            wsChannel?.removeEventListener('message', messageHandler);
        }
    }, [wsChannel]);
    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {messages.map((m: ChatMessageType, index: number) => <Message message={m} key={index}/>)}
        </div>
    );
};

export default Messages;
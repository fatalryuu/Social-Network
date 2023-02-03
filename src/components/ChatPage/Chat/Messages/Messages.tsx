import React, {useEffect, useState} from 'react';
import Message, {ChatMessageType} from "./Message/Message";
const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        })
    }, []);
    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {messages.map((m: ChatMessageType, index: number) => <Message message={m} key={index}/>)}
        </div>
    );
};

export default Messages;
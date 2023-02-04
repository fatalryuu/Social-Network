import React, {useEffect, useState} from 'react';
import Message, {ChatMessageType} from "./Message/Message";

const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    useEffect(() => {
        wsChannel?.addEventListener('message', (e: MessageEvent) => {
            debugger
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        })
    }, [wsChannel]);
    debugger
    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {messages.map((m: ChatMessageType, index: number) => <Message message={m} key={index}/>)}
        </div>
    );
};

export default Messages;
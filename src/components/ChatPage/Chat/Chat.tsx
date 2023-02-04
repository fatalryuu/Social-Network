import React, {useEffect, useState} from 'react';
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
    useEffect(() => {
        const createChannel = () => {
            setWsChannel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'));
        }
        createChannel();
    }, [])

    useEffect(() => {
        wsChannel?.addEventListener('close', () => {
            console.log('error')
        })
    }, [wsChannel])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <SendMessageForm wsChannel={wsChannel}/>
        </div>
    );
};

export default Chat;
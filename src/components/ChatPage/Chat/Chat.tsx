import React, {useEffect, useState} from 'react';
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            setTimeout(createChannel, 3000);
        }
        const createChannel = () => {
            ws?.removeEventListener('close', closeHandler);
            ws?.close();
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler);
            setWsChannel(ws);
        }
        createChannel();

        return () => {
            ws.removeEventListener('close', closeHandler);
            ws.close();
        }
    }, [])

    useEffect(() => {

    }, [wsChannel])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <SendMessageForm wsChannel={wsChannel}/>
        </div>
    );
};

export default Chat;
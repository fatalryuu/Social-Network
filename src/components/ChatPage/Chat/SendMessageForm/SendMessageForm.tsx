import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const SendMessageForm: React.FC = () => {
    const [message, setMessage] = useState("");
    const sendMessage = () => {
        if (!message)
            return;
        ws.send(message);
        setMessage("");
    }
    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button onClick={sendMessage}><SendIcon /></button>
        </div>
    );
};

export default SendMessageForm;
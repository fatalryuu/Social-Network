import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';

const SendMessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState("");
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

    useEffect(() => {
        wsChannel?.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [wsChannel])

    const sendMessage = () => {
        if (!message)
            return;
        wsChannel?.send(message);
        setMessage("");
    }
    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={readyStatus !== 'ready'} onClick={sendMessage}><SendIcon /></button>
        </div>
    );
};

export default SendMessageForm;
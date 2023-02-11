import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../../../redux/store";
import {sendMessage} from "../../../../redux/chatReducer";

const SendMessageForm: React.FC<{}> = ({}) => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
    const dispatch: AppDispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message)
            return;
        dispatch(sendMessage(message));
        setMessage('');
    }
    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={false} onClick={sendMessageHandler}><SendIcon /></button>
        </div>
    );
};

export default SendMessageForm;
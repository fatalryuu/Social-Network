import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../../../redux/store";
import {sendMessage} from "../../../../redux/chatReducer";
import s from '../../ChatPage.module.css'

const SendMessageForm: React.FC<{}> = ({}) => {
    const [message, setMessage] = useState('');
    const status = useSelector((state: AppStateType) => state.chat.status);
    const dispatch: AppDispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message)
            return;
        dispatch(sendMessage(message));
        setMessage('');
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter')
            sendMessageHandler();
    }

    return (
        <div className={s.send_form}>
            <div>
                <input onChange={(e) => setMessage(e.currentTarget.value)} value={message} autoFocus onKeyPress={handleKeyPress}
                       placeholder='Write a message...'/>
            </div>
            <button disabled={status !== "ready"} onClick={sendMessageHandler} type="submit"><SendIcon/></button>
        </div>
    );
};

export default SendMessageForm;
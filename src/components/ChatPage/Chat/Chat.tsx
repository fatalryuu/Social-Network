import React, {useEffect, useState} from 'react';
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import {AppDispatch, AppStateType} from "../../../redux/store";

const Chat: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);
    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);
    return (
        <div>
            {status === 'error' && <div style={{color: 'red'}}>Some error occurred. Please refresh the page</div>}
            <Messages/>
            <SendMessageForm/>
        </div>
    );
};

export default Chat;
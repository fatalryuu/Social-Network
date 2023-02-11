import React, {useEffect, useState} from 'react';
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {useDispatch} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import {AppDispatch} from "../../../redux/store";

const Chat: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);
    return (
        <div>
            <Messages/>
            <SendMessageForm/>
        </div>
    );
};

export default Chat;
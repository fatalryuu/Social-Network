import React from 'react';
import Chat from "./Chat/Chat";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import s from './ChatPage.module.css'

const ChatPage: React.FC = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    return <div className={s.chat_wrapper}>
        <div className={s.upper}>General Chat</div>
        {!isAuth ? <Navigate to={'/login'}/> : <Chat />}
    </div>
};

export default ChatPage;
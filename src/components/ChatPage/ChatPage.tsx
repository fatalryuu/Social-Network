import React from 'react';
import Chat from "./Chat/Chat";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

const ChatPage: React.FC = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    return <>
        {!isAuth ? <Navigate to={'/login'}/> : <Chat />}
    </>
};

export default ChatPage;
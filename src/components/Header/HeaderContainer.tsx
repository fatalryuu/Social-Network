import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";
import {compose} from "@reduxjs/toolkit";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const HeaderContainer: React.FC<PropsType> = (props) => {
    return (
        <Header isAuth={props.isAuth} login={props.login} logout={props.logout} />
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout}))
    (HeaderContainer);
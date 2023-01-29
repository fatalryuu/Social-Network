import React from 'react';
import {InitialStateType, sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    sendMessageCreator: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<React.Component>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {sendMessageCreator}),
    withAuthRedirect)(Dialogs);
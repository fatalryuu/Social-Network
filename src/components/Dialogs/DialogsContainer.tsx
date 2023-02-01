import React from 'react';
import {InitialStateType, actions} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {AppStateType} from "../../redux/store";

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

const sendMessageCreator = actions.sendMessageCreator;

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {sendMessageCreator}),
    withAuthRedirect)(Dialogs);
import React from 'react';
import s from './Music.module.css'
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

const Music = () => {
    return (
        <div className={s.music}>
            Music
        </div>
    );
};

export default compose(
    connect(null, null),
    withAuthRedirect)(Music);
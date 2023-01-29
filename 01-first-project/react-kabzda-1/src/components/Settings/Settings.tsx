import React from 'react';
import s from './Settings.module.css'
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

const Settings = () => {
    return (
        <div className={s.settings}>
            Settings
        </div>
    );
};

export default compose(
    connect(null, null),
    withAuthRedirect)(Settings);
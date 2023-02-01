import React from 'react';
import s from './News.module.css'
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

const News = () => {
    return (
        <div className={s.news}>
            News
        </div>
    );
};

export default compose(
    connect(null, null),
    withAuthRedirect)(News);
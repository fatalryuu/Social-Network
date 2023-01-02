import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";

function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = 27094;
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidUpdate(prevProps) {
        if(this.props.isMain !== prevProps.isMain) {
            if(this.props.isMain){
                this.componentDidMount();
            }
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfileInfo, updateStatus} from "../../redux/profileReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import withRouter from "../../withRouter";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = 27510;  //27094
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile();
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.match.params.userID}
                        savePhoto={this.props.savePhoto}
                        saveProfileInfo={this.props.saveProfileInfo}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfileInfo}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
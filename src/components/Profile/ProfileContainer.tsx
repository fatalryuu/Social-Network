import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfileInfo, updateStatus} from "../../redux/profileReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import withRouter from "../Common/withRouter/withRouter";
import {AppStateType} from "../../redux/store";
import {ProfileType} from "../../types/types";

type PropsType = MapStatePropsType & MapDispatchToProps;

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToProps = {
    getProfile: (userID: number) => void
    getStatus: (userID: number) => void
    updateStatus: (status: string | null) => void
    savePhoto: (photo: File) => void
    saveProfileInfo: (info: ProfileType) => void
}

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        // @ts-ignore
        let userID = this.props.match.params.userID;
        if (!userID)
            userID = this.props.authorizedUserID;
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        //@ts-ignore
        if (this.props.match.params.userID !== prevProps.match.params.userID)
            this.refreshProfile();
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        //@ts-ignore
                        isOwner={!this.props.match.params.userID}
                        savePhoto={this.props.savePhoto}
                        saveProfileInfo={this.props.saveProfileInfo}
        />
    }
}

// const ProfileContainer: React.FC<PropsType> = (props) => {
//     const {userID} = useParams();
//     const refreshProfile = () => {
//         console.log(userID)
//         if (!userID) {
//             const myID = 27510;  //27094
//             props.getProfile(myID);
//             props.getStatus(myID);
//         } else {
//             props.getProfile(+userID);
//             props.getStatus(+userID);
//         }
//     }
//
//     useEffect(() => {
//         refreshProfile();
//     }, []);
//
//     useEffect(() => {
//         // if (props.match.params.userID !== prevProps.match.params.userID)
//             refreshProfile();
//     });
//
//
//     return (
//         <Profile {...props} profile={props.profile} status={props.status}
//                  updateStatus={props.updateStatus}
//                  isOwner={!userID}
//                  savePhoto={props.savePhoto}
//                  saveProfileInfo={props.saveProfileInfo}
//         />)
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userID
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfileInfo}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
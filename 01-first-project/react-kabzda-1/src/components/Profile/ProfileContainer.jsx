import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {Navigate, useParams} from 'react-router-dom'

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
    }

    componentDidUpdate(prevProps) {
        if(this.props.isMain !== prevProps.isMain) {
            if(this.props.isMain){
                this.componentDidMount();
            }
        }
    }

    render() {
        if (!this.props.isAuth)
            return <Navigate to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));
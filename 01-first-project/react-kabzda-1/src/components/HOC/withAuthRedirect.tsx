import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";

type PropsType = MapStatePropsType;

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component: any) => {
    const RedirectComponent: React.FC<PropsType> = (props) => {
        if (!props.isAuth)
            return <Navigate to={'/login'}/>
        return <Component {...props}/>
    };

    return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
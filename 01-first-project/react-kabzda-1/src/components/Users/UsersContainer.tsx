import React from 'react';
import {useSelector} from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {getIsFetching,} from "../../redux/usersSelectors";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/store";

type UsersPagePropsType = {

}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    return <>
        {isFetching ? <Preloader /> : null}
        {!isAuth ? <Navigate to={'/login'}/> : <Users />}
    </>
}

export default UsersPage;
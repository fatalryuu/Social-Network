import React from 'react';
import {actions} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {PostType} from "../../../types/types";

type PropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const addPost = actions.addPost;

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
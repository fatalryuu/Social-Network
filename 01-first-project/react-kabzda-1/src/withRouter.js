import {useParams} from "react-router-dom";
import React from "react";

const withRouter = (Children) => {
    return (props) => {
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

export default withRouter;
import React, { Fragment } from "react";
import PostList from "../Post/PostList";
import PostAdd from "../Post/PostAdd";

function Main() {
    return (
        <Fragment>
            <PostList />
            <PostAdd />
        </Fragment>
    );
}

export default Main;

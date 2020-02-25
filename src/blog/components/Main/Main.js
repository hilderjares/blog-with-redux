import React, { Fragment } from "react";
import PostList from "../Post/PostList";
import PostAdd from "../Post/PostAdd";
import { FromProvider } from "../../contexts/FormContext";

function Main() {
    return (
        <Fragment>
            <PostList />
            <FromProvider>
                <PostAdd />
            </FromProvider>
        </Fragment>
    );
}

export default Main;

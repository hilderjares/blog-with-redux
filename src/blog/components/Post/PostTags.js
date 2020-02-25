import React, { Fragment } from "react";
import PropTypes from "prop-types";

function PostTags({ tags }) {
    return (
        <Fragment>{tags && tags.map(tag => <strong> {tag} </strong>)}</Fragment>
    );
}

PostTags.propTypes = {
    tags: PropTypes.array,
};

export default PostTags;

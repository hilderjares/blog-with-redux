import React from "react";
import PropTypes from "prop-types";
import PostTags from "./PostTags";

function PostItem({ id, name, tags, post }) {
    return (
        <div>
            <div> {name} </div>
            <div>
                {" "}
                <PostTags tags={tags} />{" "}
            </div>
            <div> {post} </div>
        </div>
    );
}

PostItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    post: PropTypes.string.isRequired,
};

export default PostItem;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostItem from "./PoistItem";

function PostList({ posts }) {
    return (
        <Fragment>
            {posts &&
                posts.map(post => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        name={post.name}
                        tags={post.tags}
                        post={post.post}
                    />
                ))}
        </Fragment>
    );
}

PostList.propTypes = {
    posts: PropTypes.array,
};

const mapStateToProps = state => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(PostList);

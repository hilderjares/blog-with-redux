import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";
import { FromProvider, FormContext } from "../../contexts/FormContext";
import PostForm from "./PostForm";

function PostAdd({ addPost }) {
    const { name, setName, post, setPost, tags, setTags } = useContext(
        FormContext
    );

    const canSubmit = () => {
        return name !== "" && post !== "" && tags.length > 0;
    };

    const onSubmit = event => {
        event.preventDefault();

        if (!canSubmit()) {
            alert("please write a post before send ;)");
            return;
        }
        addPost({ name, post, tags });

        setName("");
        setPost("");
        setTags([]);
    };

    return <PostForm action={onSubmit} />;
}

PostAdd.propTypes = {
    addPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    addPost: newPost => dispatch(addPost(newPost)),
});

export default connect(null, mapDispatchToProps)(PostAdd);

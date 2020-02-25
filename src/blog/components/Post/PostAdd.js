import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPost } from "../../actions/postActions";
import { connect } from "react-redux";

function PostAdd({ addPost }) {
    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    const [tags, setTags] = useState([]);

    const handleName = event => {
        setName(event.target.value);
    };

    const handlePost = event => {
        setPost(event.target.value);
    };

    const handleTags = event => {
        let newTag = [...tags];
        newTag.push(event.target.value);

        setTags(newTag);
    };

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

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" onChange={handleName} />
                <input name="post" onChange={handlePost} />
                <select multiple onChange={handleTags}>
                    <option value="Js"> Js </option>
                    <option value="React"> React </option>
                    <option value="PHP"> PHP </option>
                    <option value="Node"> Node </option>
                </select>
                <button type="submit"> Create Post </button>
            </form>
        </div>
    );
}

PostAdd.propTypes = {
    addPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    addPost: newPost => dispatch(addPost(newPost)),
});

export default connect(null, mapDispatchToProps)(PostAdd);

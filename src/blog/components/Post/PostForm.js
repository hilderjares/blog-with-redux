import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import PropTypes from "prop-types";

function PostForm({ action }) {
    const { name, handleName, post, handlePost, tags, handleTags } = useContext(
        FormContext
    );

    return (
        <div>
            <form onSubmit={action}>
                <input name="name" value={name} onChange={handleName} />
                <input name="post" value={post} onChange={handlePost} />
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

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
};

export default PostForm;

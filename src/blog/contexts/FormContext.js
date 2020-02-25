import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FromProvider = ({ children }) => {
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

    return (
        <FormContext.Provider
            value={{
                name,
                setName,
                handleName,
                post,
                setPost,
                handlePost,
                tags,
                setTags,
                handleTags,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

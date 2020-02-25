import { v4 as uuidv4 } from "uuid";

export const addPost = ({ name, tags, post }) => ({
    type: "ADD_POST",
    id: uuidv4(),
    name: name,
    tags: tags,
    post: post,
});

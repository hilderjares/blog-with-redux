import { v4 as uuidv4 } from "uuid";

const add = ({ name, tags, post }) => ({
    type: "ADD_POST",
    id: uuidv4(),
    name: name,
    tags: tags,
    post: post,
});

export { add };

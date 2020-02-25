import { v4 as uuidv4 } from "uuid";

const INITAL_STATE = [
    {
        id: uuidv4(),
        name: "create react app with redux",
        tags: ["react", "redux", "js"],
        post: "in this I will show how create a new app using react and redux",
    },
];

const postReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    tags: action.tags,
                    post: action.post,
                },
            ];
        default:
            return state;
    }
};

export default postReducer;

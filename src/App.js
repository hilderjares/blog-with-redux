import React from "react";
import Main from "./blog/components/Main";
import store from "./blog/store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

export default App;

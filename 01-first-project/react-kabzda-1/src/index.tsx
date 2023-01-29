import React from 'react';
import store from "./redux/store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        {/*// @ts-ignore*/}
        <App/>
    </Provider>
);


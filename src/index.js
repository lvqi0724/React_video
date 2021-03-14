import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from "./store";
import Routers from "./router";

ReactDOM.render(
    <Provider store={store}>
            <Routers>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
            </Routers>
    </Provider>,
  document.getElementById('root')
);



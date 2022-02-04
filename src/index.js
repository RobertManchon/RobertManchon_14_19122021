import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import PageRouter from './router/PageRouter.js';
import { persistor, store } from './redux/store';
import './index.css'

ReactDOM.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <PageRouter />
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);



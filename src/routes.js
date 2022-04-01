import React from 'react';

import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as Views from './views';

const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={ <Views.HomePage /> } history={history} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
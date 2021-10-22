import React from 'react';

import './index.css';
// import App from './App';
// import Home from './Home/Home';
import { render } from 'react-dom';
import AppLoading from './Spinners/AppLoader';
import reportWebVitals from './reportWebVitals';
import { Switch,  } from 'react-router';
import Create from './Event/Create';


import { BrowserRouter, Route } from 'react-router-dom'



const AnRoute = () => {

   
    return (
      <React.Suspense fallback={<AppLoading />}>

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Create} />
                {/* <Route exact path="/event/create" exact component={createEvent} /> */}
            </Switch>
        </BrowserRouter>
        </React.Suspense>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
render(<AnRoute />, document.getElementById('root'));
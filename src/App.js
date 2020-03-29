import React from 'react';
import './App.css';
import {Switch ,Route} from 'react-router-dom';
import Homepage from '././Pages/homepage.component';

const Hatspage = ()=>
(
  <div>
    <h1>Hatspage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route  path='/shop/hats' component={Hatspage}></Route>
      </Switch>
    </div>
  );
}

export default App;

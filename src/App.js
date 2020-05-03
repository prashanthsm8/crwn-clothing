import React from 'react';
import './App.css';
import {Switch ,Route} from 'react-router-dom';
import Homepage from '././Pages/homepage/homepage.component.jsx';
import Shoppage from '././Pages/shoppage/shoppage.component.jsx';
import SignInAndSignUp from '././Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route  path='/shop' component={Shoppage}></Route>
      <Route  path='/signin' component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;

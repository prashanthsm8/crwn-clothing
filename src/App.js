import React from 'react';
import './App.css';
import {Switch ,Route, Redirect} from 'react-router-dom';
import Homepage from '././Pages/homepage/homepage.component.jsx';
import Shoppage from '././Pages/shoppage/shoppage.component.jsx';
import SignInAndSignUp from '././Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component 
{
  
  unsubscribeFromAuth = null

  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
           id : snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route  path='/shop' component={Shoppage}></Route>
        <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}></Route>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispactToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispactToProps)(App);

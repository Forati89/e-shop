import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import './App.css';

// ----------- pages componenets ---------- //

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }); 
        });
        
      }
      else{
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){
    return (
      <div>
      <Header />
      <Switch>
       <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
       <Route path={process.env.PUBLIC_URL + '/shop'} component={ShopPage} />
       <Route 
          exact
          path={process.env.PUBLIC_URL + '/signIn'}
          render={()=>
            this.props.currentUser ? (
            <Redirect to={process.env.PUBLIC_URL + '/'} />
            ) : (
            <SignInAndSignUp />
            )
          }
      />
      <Route exact path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutPage} />
      </Switch>
      </div>
    );
  }


}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

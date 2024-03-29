import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import {ReactComponent as Logo }from '../../assets/crown.svg'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
 } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to={process.env.PUBLIC_URL + '/'}>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={process.env.PUBLIC_URL + '/shop'}>
                SHOP
            </OptionLink>
            <OptionLink to={process.env.PUBLIC_URL + '/contact'}>
                CONTACT
            </OptionLink>
            {
                currentUser?(
                <OptionLink as='div' onClick={()=> auth.signOut()}>
                SIGN OUT
                </OptionLink>
                ) : (
                <OptionLink to={process.env.PUBLIC_URL + '/signin'}>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
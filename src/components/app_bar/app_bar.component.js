import React from 'react'
import { Link } from 'react-router-dom'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './app_bar.scss'


const AppBar = (props) => {


  return (
    <div className="appbar">
        <Link to="/" className="appbar__logo movein">
            <div>
                Cindys
            </div>
        </Link>
        
        <div className="appbar__search">
            <input 
               className="appbar__search_input spreadout"
               name="search_input"
               type="text"
               placeholder="Search a meal..." 
               />
        </div>
        
        
        <ShoppingBasketIcon 
            className="appbar__icon movein" />
        
    </div>
  )
}


export default AppBar
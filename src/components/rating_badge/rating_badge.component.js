import React from 'react'

import StarIcon from '@material-ui/icons/Star';

import './rating_badge.scss'


export default ({ rating }) => {
    

   return (
    <div className="rating_badge">
        <StarIcon className="rating_badge__icon" />
        <span className="rating_badge__rating"> { rating } </span>
    </div>
   )
}

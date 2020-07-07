import React from 'react'
import { useHistory } from 'react-router-dom'

// rating badge
import RatingBadge from '../rating_badge/rating_badge.component'

import './meal_card.scss'


export default ({ meal, router }) => {
   const { id, name, image, price, rating } = meal
   const history = useHistory()

   const goViewDetails = ()=> {
       history.push(`/meal/${id}`, { meal: meal })
    //    router.push({ pathname: '/meal/dfbfgbrfg', query: { meal: meal } })
   }

   return (
    //  <Link to={{
    //     pathname: `/meal/hrjkhr`, 
    //     query: {
    //      character: character
    //     }
    //  }}>
    <div className="meal_card" onClick={goViewDetails}>
        <div className="meal_card__image_area">
            <img 
                className="meal_card__image_area__image"
                src={image}
            />
            <RatingBadge rating={rating} />
        </div>
        <div className="meal_card__content_area">

            <p className="meal_card__content_area__name"> 
                { name }
            </p>
            <p className="meal_card__content_area__price"> 
                <span className="meal_card__content_area__price_currency_sign">$</span>{ price }
            </p>

        </div>
    </div>
    //  </Link>
   ) 
}


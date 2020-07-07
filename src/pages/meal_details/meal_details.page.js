import React from 'react'
import { useHistory } from 'react-router-dom'


import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



// app bar
import AppBar from '../../components/app_bar/app_bar.component'

import './meal_details.scss'


const MealDetailsPage = ({ meal, location }) => {
   
  const { id, name, image, description, rating, price } = location.state.meal
   console.log('props price ', price)

   return (
     <div className="meal_details_page">
       {/* app bar  */}
       <AppBar />

       {/* close icon */}
       <CloseButton />

       {/* meal image */}
       <div className="meal_details_page__image"></div>

       {/* meal details container */}
       <div className="meal_details">
          <div className="meal_details__image_container">
            <img
               src={image}
               className="meal_details__image_container__image slidein"
             />
          </div>
          
          <div className="meal_details__content_container">
            
            <p className="meal_details__content_container__meal_name slidein"> 
              {name} 
            </p>
            <div className="meal_details__content_container__meal_rating slideup"> 
              <StarIcon className="meal_details__content_container__meal_rating_icon" /> 
              <StarIcon className="meal_details__content_container__meal_rating_icon" /> 
              <StarIcon className="meal_details__content_container__meal_rating_icon" /> 
              <StarIcon className="meal_details__content_container__meal_rating_icon" /> 
              <StarIcon className="meal_details__content_container__meal_rating_icon" /> 
              <span className="meal_details__content_container__meal_rating_rating">
                ( {rating} )
              </span>
              <span className="meal_details__content_container__meal_rating_reviews"> 
                2,300 reviews 
              </span>
            </div>
            <p className="meal_details__content_container__meal_price slideup"> 
              <span className="meal_details__content_container__meal_price_money_sign">
                $
              </span>
              {price} 
            </p>
            <p className="meal_details__content_container__meal_description slideup"> 
              {description} 
            </p> 

            <div className="meal_details__content_container__meal_ingredients slideup">
              <h2 className="meal_details__content_container__meal_ingredients_title">
                Ingredients
              </h2>

              <p className="meal_details__content_container__meal_ingredients_ingredient slideup"> 
                Pilau Masala 
              </p>
              <p  className="meal_details__content_container__meal_ingredients_ingredient slideup"> 
                Chillie and Pepper 
              </p>
              <p  className="meal_details__content_container__meal_ingredients_ingredient slideup"> 
                2 slices of garlic 
              </p>
              <p  className="meal_details__content_container__meal_ingredients_ingredient slideup"> 
                2 tea spoons of cooking oil 
              </p>
              <p  className="meal_details__content_container__meal_ingredients_ingredient slideup"> 
                Magerrita cheese 
              </p>
            </div>
            
          </div>
          
          <button className="meal_details__order_cta_button slideup">  
            <ShoppingBasketIcon className="meal_details__order_cta_button__icon" />
            Order Now 
          </button>
       </div>
       {/* meal details container */}

     </div>
   )
}


const CloseButton = (props) => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }// const goBack = () => { .. }

  return (
    <div className="go_back_button" onClick={goBack}> 
      <CloseIcon className="go_back_button__icon" />
      <span className="go_back_button__text"> Close </span>
    </div>
  )
}

export default MealDetailsPage
import React, { useState, useEffect } from 'react'

import './home_page.scss'

// app bar
import AppBar from '../../components/app_bar/app_bar.component'
// chips 
import Chip from '../../components/chip/chip.component'
// meal card
import MealCard from '../../components/meal_card/meal_card.component'
// footer
import Footer from '../../components/footer/footer.component'

// data
import meals_data from '../../store/data'


const HomePage = (props) => {
   const meals = meals_data 
   const filters = [ 'All', 'Breakfast', 'Drinks', 'Whole Meal' ];
   const [ selectedChip, setSelectedChip ] = useState('All')
   

   return (
     <div className="home_page">
       <AppBar />
       
       {/* filter chips  */}
       <FilterChips 
          filters={filters}
          selectedChip={selectedChip} 
          onSelectChip={setSelectedChip} />

       
       {/* meal list */}
       <div className="meal_list">
         {
           meals.map((meal)=> {
             return <MealCard key={meal.id} meal={meal} />
           })
         }
       </div>



       {/* footer  */}
       <Footer />
     </div>
   )
}



const FilterChips = ({ filters, selectedChip, onSelectChip }) => {

  return (
    <div className="chip_list">
      {
        filters.map((chip, index)=> {
          return (
            <Chip 
                key={index}
                isSelected={ selectedChip === chip } 
                title={chip}
                onSelect={onSelectChip}
            />
          )
        })
      }
    </div>
  )
}



export default HomePage
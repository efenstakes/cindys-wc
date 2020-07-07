import React from 'react'
import classNames from 'classnames'

import './chip.scss';


const Chip = ({ isSelected, title, onSelect }) => {
   
   const onSelectChip = () => {
       return onSelect(title)
   }// const onSelectChip = (filter) => { .. }

   return (
     <div className={ 
         isSelected ? 'chip movein chip_selected' : 'chip movein chip_unselected'  
      } onClick={onSelectChip}>
        { title }
     </div>     
   )
}


export default  Chip
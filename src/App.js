import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// pages
import HomePage from './pages/home/home.page'
import MealDetailsPage from './pages/meal_details/meal_details.page'


function App() {
  return (
    <Router>
      <div className="">
    
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/meal/:id" component={MealDetailsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

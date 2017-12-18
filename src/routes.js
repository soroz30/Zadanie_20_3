import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentationals/navigation.component';
import Home from './presentationals/home.component';
import Contact from './presentationals/contact.component';
import NotFound from './presentationals/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentContainer from './containers/continents-container.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);

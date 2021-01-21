import React, { Component } from 'react';
import CardList from '../Components/cardlist.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/scroll.js';
import ErrorBoundry from '../Components/component Errorboundry';

import './app.css';

//import { render } from '@testing-library/react';



class app extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchField:''
        }
    } 

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots: users}));
       
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})  
    }

    render()
    {
        const { robots, searchField } = this.state;

        const filteredRobots =robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
          return !robots.length?
              <h1>Loading...</h1> :

               (
                <div className ='tc'>
                <h1 className = 'f1'>RoboFriendz</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                   <ErrorBoundry>
                       <CardList robots = {filteredRobots}/>
                   </ErrorBoundry>
                
                </Scroll>
                
                </div>
        
               );
   };
}
export default app;  

/* STATE is simply an object that describes the app
and the STATEthat describes our app here is the robot and whatever is entered into the searchbox
the STATE is able to change. we are able to change the value of the searchbox and what robot array mean
in other word 'what gets displayed'. PROPS are simply things that come out of STATE.
A parent feeds STATE into a child component as soon as a child component recieves a STATE it becomes a property and that property can never change.
the parent tells it what the STATE is and the child recieves it as a Prop in this case thr prop is robots*/

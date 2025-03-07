import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
// import { restaurant } from 'restaurant';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>

        <input type="submit" />
      </form>
    );
  }
};



//connect this component by wrapping RestaurantInput below

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newResturant) => {
      dispatch(addRestaurant(newResturant))
    }
  };
};

export default connect(null, mapDispatchToProps)(RestaurantInput)

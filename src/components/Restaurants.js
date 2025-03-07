import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {
 debugger
    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
//  This is connecting store to compenets restaurants.  

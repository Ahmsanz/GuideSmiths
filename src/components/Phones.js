import React, {Component} from 'react';
// import {connect} from 'react-redux';
import axios from 'axios';


class Phones extends Component {

  state = {
    phones: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/phones/all')
    .then(res => this.setState({phones: res.data}))
    .catch(err => console.log('not getting those phones', err))
  }

  render() {


    let {phones} = this.state;

    let phonesList = phones.length ? (
      phones.map( phone => {
        return (
          <div>
            <div className="phone-card" key={phone.id}>
              <div className = "card-content">
                <img alt="phone image"/>
                <div>
                  <h4> {phone.name} </h4>
                  <p> {phone.manufacturer} </p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div>
        <p>Waiting for those phone models... </p>
      </div>
    );

    return (
      <div>
        {phonesList}
      </div>
    )
  }
}

export default Phones;

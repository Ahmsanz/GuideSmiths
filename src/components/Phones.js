import React, {Component} from 'react';
// import {connect} from 'react-redux';
import axios from 'axios';


class Phones extends Component {

  state = {
    phones: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/phones')
    .then(res => this.setState({phones: res.data}))
    .catch(err => console.log('not getting those phones', err))
  }

  render() {


    let {phones} = this.state;

    let phonesList = phones.length ? (
      phones.map( phone => {
        return (

            <div className="phone-card" key={phone.id}>
              <div className = "card-content">
                <h4> {phone.name} </h4>
                <p> {phone.manufacturer} </p>
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
      <div className = "content">
        <div className = "phone-catalogue">
          {phonesList}
        </div>
      </div>
    )
  }
}

export default Phones;

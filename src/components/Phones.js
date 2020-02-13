import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getPhones} from '../store/actions/phonesActions.js';


class Phones extends Component {

  state = {
    phones: []
  }


  componentDidMount(){
    this.props.getPhones();
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  render() {


    let {phones} = this.props;

    let phonesList = phones.length ? (
      phones.map( phone => {
        return (

            <div className="phone-card" key={phone.id}>
              <div className = "card-content">
                <img src={phone.img} alt="phone image" />
                <div>
                  <h4> {phone.name} </h4>
                  <p> {phone.manufacturer} </p>
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
      <div className = "content">
        <div className = "phone-catalogue">
          {phonesList}
        </div>
      </div>
    )
  }
};


const mapStateToProps = (state) => {


  return {
    phones: state.phones
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    getPhones: () => {dispatch(getPhones())}

  }
};



export default connect( mapStateToProps, mapDispatchToProps)(Phones)

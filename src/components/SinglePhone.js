import React, {Component} from 'react';
import {getPhones} from '../store/actions/phonesActions.js';
import {connect} from 'react-redux';

class SinglePhone extends Component {
  state = {
    phone: ""
  }

  componentDidMount(){
    this.setState({phone: this.props.phones})
  }
  render(){

    let {phone} = this.state;

    return(
      <div className="content">
        <div className="singlephone-card" key={phone.id}>
               
            <div className="singlephone-content">
              <div className="phone-header">
                <img src={phone.img} alt="phone image" />
                <div>
                  <h4> {phone.name} </h4>
                  <p> {phone.manufacturer}</p>
                  <p>Price: {phone.price}€</p>
                  <p>Color: {phone.color}</p>
                </div>
              </div>
              <div className="phone-data">
                <p>{phone.description}</p>
              </div>
            </div>
          
          
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {

  console.log(ownProps);
  let id = ownProps.match.params.id;

  return {
    phones: state.phones.find(phone => phone.id == id)
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    getPhones: () => {dispatch(getPhones())}

  }
};

export default connect( mapStateToProps, mapDispatchToProps)(SinglePhone)

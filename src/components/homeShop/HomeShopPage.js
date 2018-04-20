import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as homeShopActions from '../../actions/homeShopActions';

import PaymentMethods from './PaymentMethods';

class HomePage extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      buyAsGift: false,
      autoRenewal: false,
      addDiscount: false,
      subscription: {name: ''}
    };
  }
  
  handleClick (e) {
    let selectedButton = (
      e.target.type !== 'submit') ? e.target.parentNode : e.target;

    // variables for dispatching an action
    let idNum = Number.parseInt (selectedButton.id, 10);
    let selectedObjectArr = this.props.paymentMethods.filter (
      object => object.id === idNum
    );
    let selectedObject = selectedObjectArr[0];
    let paymentMethod = Object.assign ({}, selectedObject);
   
    // variables for styling classes
    let buttons = selectedButton.parentNode.getElementsByTagName ('button');
    let buttonsArray = [...buttons]; // html collection to array
    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );

    // if another option is selected, select new option & append classes
    if (this.props.paymentMethod.name !== selectedObject.name) {

      selectedButton.className = 'highlighted';
      filtered.forEach (element => element.className='muted');
      
      // instead of using react's setState ({}) function to change state,
      // we dispatch an action to change redux state 
      this.props.actions.selectPaymentMethod (paymentMethod);

    } else {
      // if this method already selected, reset state to clean 
      this.props.actions.selectPaymentMethod ({});
      selectedButton.className = '';
      filtered.forEach (element => element.className='');
    }
  }

  render () {
  
    return (
      <div>
        <p>{this.props.paymentMethod.name} selected</p>
        <PaymentMethods 
                  paymentMethods = {this.props.paymentMethods}
                  divId = "paymentMethod"
                  paymentMethod = {this.state.paymentMethod}
                  buyAsGift = {this.state.buyAsGift}
                  handleClick = {e => this.handleClick(e)}
        />
        </div>
    );
  }
}

HomePage.propTypes = {
  paymentMethods: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// state from redux (via reducer)
const mapStateToProps = (state, ownProps) => {
  return { paymentMethod: state.paymentReducer };
};

// binding props to dispatch calls to actions
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators (homeShopActions, dispatch)
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (HomePage);

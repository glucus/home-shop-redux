import React, {PropTypes} from 'react';
//import CheckBox from './common/CheckBox';

const PaymentMethods = (props) => {

  const handleClick = e => props.handleClick (e);
  const handleChange = e => props.handleChange (e);

  return (
    <div className="">
      <h4>Выберите способ оплаты</h4>
      <div id={props.divId}
           className="">
        {props.paymentMethods.map (
          method => (
          <button key={method.id}
                  id={method.id}
                  onClick={e => handleClick(e)}
                  name={method.name}
                  disabled={method.name === "Подарочный код" && props.buyAsGift}
                  className="">
            {method.logo === "" ? 
              <p className="">{method.name}</p> : 
              <img src={method.logo} alt={method.name}/>
            }
          </button>)
        )}
      </div>
    </div>
  );
};

PaymentMethods.propTypes = {
  handleClick: PropTypes.func,
  divId: PropTypes.string,
  paymentMethods: PropTypes.array.isRequired,
  buyAsGift: PropTypes.bool.isRequired
};

export default PaymentMethods;


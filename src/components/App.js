import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HomeShopPage from './homeShop/HomeShopPage';

class App extends React.Component {

  render () {

    const paymentMethods = [
      {
        id: 0, 
        name: 'Visa',
        logo: ''
      },
      {
        id: 1, 
        name: 'Yandex Money',
        logo: ''
      },
      {
        id: 2,
        name: 'PayPal',
        logo: ''
      },
      {
        id: 3,
        name: 'SMS',
        logo: ''
      },
      {
        id: 4,
        name: 'QIWI',
        logo: ''
      },
      {
        id: 5,
        name: 'Подарочный код',
        logo: ''
      }
    ];
    
    // children passed as props from parent <Router /> component in index.js
    return (
      <div className="container-fluid">
        <h1>React App</h1>
        <Link to="courses">Courses</Link>
        {this.props.children}
        <HomeShopPage paymentMethods={paymentMethods}/>
      </div>
    );
  }  
}

App.propTypes = {
  children: PropTypes.object
};

export default App;


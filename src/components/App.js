import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class App extends React.Component {

  render () {
    // children passed as props from parent <Router /> component in index.js
    return (
      <div className="container-fluid">
        <h1>React App</h1>
        <Link to="courses">Courses</Link>
        {this.props.children}
      </div>
    );
  }  
}

App.propTypes = {
  children: PropTypes.object
};

export default App;


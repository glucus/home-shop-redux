import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      course: {title: ''},
      courses: []//,
      //idCounter: 0
    };

    this.onClickSave = this.onClickSave.bind (this);
    //this.onTitleChange = this.onTitleChange.bind (this);
  }

  onTitleChange (e) {
    //let idCounter = this.state.idCounter;
    
    this.setState ({
      course: {
        title: e.target.value//, 
        //id: idCounter
      }
    });
  }

  // the code of event handler was moved to the action 
  onClickSave () {
    this.props.actions.createCourse (this.state.course);
  }
  /* let course = Object.assign ({}, this.state.course);
  this.setState (prevState => ({ courses: [...prevState.courses, course] });
  ); */
  

  render () {
    return (
      <div>
        <p>next id: {this.state.idCounter}</p>
        <h1>Courses</h1>
        <ul>
          {this.props.courses.map (
            course => <li>{course.title}</li>
          )}
        </ul>
        <h2>Add courses</h2>
        <input type="text"
               onChange={e => this.onTitleChange(e)}
               value={this.state.course.title}/>
        <input type="submit"
               value="Save"
               onClick={this.onClickSave}
               />
      </div>
    );
  }
}

// mapStateToProps exposes some part of redux store (state)
// to the react component via props 
// ownProps - for referencing url injected by react-router

const mapStateToProps = (state, ownProps) => {
  return { courses: state.courseReducer };
};
// return state.courseReducer data as props.courses



const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators (courseActions, dispatch)
    //createCourse: course => dispatch (courseActions.createCourse (course))
  }
};

// connect function connects react component with redux
// connect () returns a function, which takes CoursesPage as a parameter

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect (mapStateToProps, mapDispatchToProps) (CoursesPage);


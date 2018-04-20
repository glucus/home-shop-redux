import * as actionTypes from './actionTypes';

export const createCourse = (course) => {
  return {type: 'CREATE_COURSE', course: course};
};


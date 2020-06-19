import axios from 'axios'

const COURSE_NAME = 'getAlluser'
const COURSE_API_URL = 'http://localhost:8080'
const COURSE_NAME_API_URL =  `${COURSE_API_URL}/${COURSE_NAME}`

class CourseDataService {
    retrieveAllCourse(name){
        return axios.get(`${COURSE_NAME_API_URL}`);
    }
}


export default new CourseDataService()
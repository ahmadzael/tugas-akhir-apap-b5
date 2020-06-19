import axios from 'axios'

const COURSE_NAME = 'GetAllAnggota'
const COURSE_API_URL = 'http://35.240.218.160:4003/'
const COURSE_NAME_API_URL =  `${COURSE_API_URL}/rpc/${COURSE_NAME}`

class CourseDataService {
    retrieveAllCourse(name){
        return axios.get(`${COURSE_NAME_API_URL}`);
    }
}


export default new CourseDataService()
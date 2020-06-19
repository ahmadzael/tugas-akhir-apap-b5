import React,{Component} from 'react';
import CourseDataService from '../service/CourseDataService';
import Navbar from './Navbar'

const COURSE_NAME = `APAP`

class ListCoursesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            courses:[],
            message:null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount(){
        this.refreshCourses();
    }

    refreshCourses(){
         CourseDataService.retrieveAllCourse()
            .then(
                response => {
                    console.log(response);
                    this.setState({courses:response.data})
                }
            )
            
    }

    render(){
        return(
            
            <div className="container">
                
                <h3>All Courses</h3>
                <div className="container">
                    <table className ="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                    <tr key={course.Id}>
                                        <td>{course.Alamat}</td>
                                        <td>{course.Nama}</td>
                                        <td>{course.TanggalLahir}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ListCoursesComponent
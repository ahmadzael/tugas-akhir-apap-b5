import React,{Component} from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Anggota from './Anggota'


class CourseApp extends Component{
    render(){
        return (
            <div>
            <Navbar/>
            <div className="main-container ace-save-state" id="main-container">
            <Sidebar/> 
            <Anggota/>
            <Footer />
            </div>
            {/* <ListCoursesComponent /> */}
            </div>
        )
    }
}

export default CourseApp
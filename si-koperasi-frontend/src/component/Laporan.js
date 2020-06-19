import React,{Component} from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Anggota from './Anggota'


class Laporan extends Component{
    render(){
        return (
            <div>
            <Navbar/>
            <div className="main-container ace-save-state" id="main-container">
            <Sidebar {...this.props}/>
           
            <Footer />
            </div>
            {/* <ListCoursesComponent /> */}
            </div>
        )
    }
}

export default Laporan
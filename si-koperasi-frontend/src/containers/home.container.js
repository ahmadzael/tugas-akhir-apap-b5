// Header.js
import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'
import Anggota from '../component/Anggota'

export default class Home extends Component {
    render(){
        return (
            <div>
            <Navbar/>
            <div className="main-container ace-save-state" id="main-container">
            <Sidebar {...this.props}/> 
            <Anggota/>
            <Footer />
            </div>
            </div>
        )
    }
}
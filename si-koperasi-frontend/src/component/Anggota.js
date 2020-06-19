// Header.js
import React, {Component} from 'react';
import CourseDataService from '../service/CourseDataService';

const COURSE_NAME = `APAP`

export default class Anggota extends Component {
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
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="breadcrumbs ace-save-state" id="breadcrumbs">
                        <ul className="breadcrumb">
                            <li>
                                <i className="ace-icon fa fa-home home-icon"></i>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="#">Anggota</a>
                            </li>
                            
                        </ul>


                    <div className="page-content">
                        <div className="page-header">
                            <h1>
                                Menu Anggota
                                <small>
                                    <i className="ace-icon fa fa-angle-double-right"></i>
                            
                                </small>
                            </h1>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <table id="simple-table" className="table  table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="center">
                                                <label className="pos-rel">
                                                    <input type="checkbox" className="ace" />
                                                    <span className="lbl"></span>
                                                </label>
                                            </th>
                                            <th>KTP</th>
                                            <th>Nama</th>
                                            <th>Tempat Lahir</th>
                                            <th>Tanggal Lahir</th>

                                            <th>
                                                <i className="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>
                                                Alamat
                                            </th>
                                            <th>Telepon</th>

                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="center">
                                                <label className="pos-rel">
                                                    <input type="checkbox" className="ace" />
                                                    <span className="lbl"></span>
                                                </label>
                                            </td>
                                            <td>
                                                321212101021                                           </td>
                                            <td>
                                            Ahmad Jaelani
                                            </td>

                                
                                            <td>Jakarta</td>
                                            <td >10 Januari 1994</td>
                                            <td>Bintaro Tangerang Selatan</td>

                                            <td >
                                                08121212142
                                            </td>

                                            <td>
                                                <div className="hidden-sm hidden-xs btn-group">

                                                    <button className="btn btn-xs btn-info">
                                                        <i className="ace-icon fa fa-pencil bigger-120"></i>
                                                    </button>

                                                    <button className="btn btn-xs btn-danger">
                                                        <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="center">
                                                <label className="pos-rel">
                                                    <input type="checkbox" className="ace" />
                                                    <span className="lbl"></span>
                                                </label>
                                            </td>
                                            <td>
                                                321212101021 </td>
                                            <td>
                                            Tommy Aji Prabowo
                                            </td>

                                
                                            <td>Yogyakarta</td>
                                            <td >10 Desember 1994</td>
                                            <td>Depok</td>

                                            <td >
                                                08182192
                                            </td>

                                            <td>
                                                <div className="hidden-sm hidden-xs btn-group">

                                                    <button className="btn btn-xs btn-info">
                                                        <i className="ace-icon fa fa-pencil bigger-120"></i>
                                                    </button>

                                                    <button className="btn btn-xs btn-danger">
                                                        <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>  
              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        )
    }
}



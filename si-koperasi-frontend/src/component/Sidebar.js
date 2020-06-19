// Header.js
import React, {Component} from 'react';

export default class Sidebar extends Component {
    render(){
        return (
<div id="sidebar" className="sidebar                  responsive                    ace-save-state">
    <div className="sidebar-shortcuts" id="sidebar-shortcuts">
        <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button className="btn btn-success">
                <i className="ace-icon fa fa-signal"></i>
            </button>

            <button className="btn btn-info">
                <i className="ace-icon fa fa-pencil"></i>
            </button>

            <button className="btn btn-warning">
                <i className="ace-icon fa fa-users"></i>
            </button>

            <button className="btn btn-danger">
                <i className="ace-icon fa fa-cogs"></i>
            </button>
        </div>

        <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
            <span className="btn btn-success"></span>

            <span className="btn btn-info"></span>

            <span className="btn btn-warning"></span>

            <span className="btn btn-danger"></span>
        </div>
    </div>

    <ul className="nav nav-list">
        <li className="">
            <a href="index.html">
                <span className="menu-text"> Home </span>
            </a>

            <b className="arrow"></b>
        </li>
        <li className="">
            <a href="index.html">
                <span className="menu-text"> Profile </span>
            </a>

            <b className="arrow"></b>
        </li>

        <li className="">
            <a href="index.html">
            
                <span className="menu-text"> Pinjaman </span>
            </a>

            <b className="arrow"></b>
        </li>


        <li className="">
            <a href="index.html">
            
                <span className="menu-text"> Simpanan </span>
            </a>

            <b className="arrow"></b>
        </li>

        <li className="active open">
            <a href="#" className="dropdown-toggle">
            
                <span className="menu-text"> Anggota </span>
            </a>

            <b className="arrow"></b>

        </li>

        <li className="">
            <a href="index.html">
            
                <span className="menu-text"> Laporan </span>
            </a>

            <b className="arrow"></b>
        </li>

    </ul>

    <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
        <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
    </div>
</div>





        )
    }
}



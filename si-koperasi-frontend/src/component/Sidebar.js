// Header.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div
        id='sidebar'
        className='sidebar responsive ace-save-state'
      >
        <div className='sidebar-shortcuts' id='sidebar-shortcuts'>
          <div className='sidebar-shortcuts-large' id='sidebar-shortcuts-large'>
            <button className='btn btn-success'>
              <i className='ace-icon fa fa-signal'></i>
            </button>

            <button className='btn btn-info'>
              <i className='ace-icon fa fa-pencil'></i>
            </button>

            <button className='btn btn-warning'>
              <i className='ace-icon fa fa-users'></i>
            </button>

            <button className='btn btn-danger'>
              <i className='ace-icon fa fa-cogs'></i>
            </button>
          </div>

          <div className='sidebar-shortcuts-mini' id='sidebar-shortcuts-mini'>
            <span className='btn btn-success'></span>

            <span className='btn btn-info'></span>

            <span className='btn btn-warning'></span>

            <span className='btn btn-danger'></span>
          </div>
        </div>

        <ul className='nav nav-list'>
          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('home') ? 'active' : ''}>
            <Link to='/Home' className='active-border'>
              <span className='menu-text'> Home </span>
            </Link>

            <b className='arrow'></b>
          </li>
          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('profile') ? 'active' : ''}>
            <Link to='/Profile' className='active-border'>
              <span className='menu-text'> Profile </span>
            </Link>

            <b className='arrow'></b>
          </li>

          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('pinjaman') ? 'active' : ''}>
            <Link to='/Pinjaman' className='active-border'>
              <span className='menu-text'> Pinjaman </span>
            </Link>

            <b className='arrow'></b>
          </li>

          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('simpanan') ? 'active' : ''}>
            <Link to='/Simpanan' className='active-border'>
              <span className='menu-text'> Simpanan </span>
            </Link>

            <b className='arrow'></b>
          </li>

          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('anggota') ? 'active' : ''}>
            <Link to='/Anggota' className='dropdown-toggle'>
              <span className='menu-text'> Anggota </span>
            </Link>

            <b className='arrow'></b>
          </li>

          <li className={this.props && this.props.location && this.props.location.pathname && this.props.location.pathname.toLowerCase().includes('laporan') ? 'active' : ''}>
            <Link to='/Laporan' className='active-border'>
              <span className='menu-text'> Laporan </span>
            </Link>

            <b className='arrow'></b>
          </li>
        </ul>

        <div className='sidebar-toggle sidebar-collapse' id='sidebar-collapse'>
          <i
            id='sidebar-toggle-icon'
            className='ace-icon fa fa-angle-double-left ace-save-state'
            data-icon1='ace-icon fa fa-angle-double-left'
            data-icon2='ace-icon fa fa-angle-double-right'
          ></i>
        </div>
      </div>
    )
  }
}

// Header.js
import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      alamat: '',
      telepon: '',
      isLogin: true,
    }
  }

  onLogin = () => {
    let url  = `http://localhost:2016/user/view/${this.state.username}&${this.state.password}`
    axios.get(url).then(resp => {
      if (resp)  {
        this.props.history.push('/home')
      } else {
        alert('failed login')
      }
    }).catch(err => {
      console.log(err)
      alert('failed login')
    })

  }

  onRegister = () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    let url = `http://localhost:2016/user/add`
    axios.post(url, user).then(resp => {
      if (resp)  {
        alert('success register')
      } else {
        alert('failed register')
      }
    }).catch(err => {
      console.log(err)
      alert('failed register')
    })
    this.setState({ isLogin: true })
  }

  signIn = () => {
    return (
      <div id='login-box' className='login-box visible widget-box no-border'>
        <div className='widget-body'>
          <div className='widget-main'>
            <div className='header blue lighter bigger'></div>
            <div className='space-6'></div>
            <fieldset>
              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    placeholder='Username'
                    className='form-control'
                    value={this.state.username}
                    onChange={(field) => this.setState({ username: field.target.value })}
                  />
                  <i className='ace-icon fa fa-user'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(field) => this.setState({ password: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <div className='space'></div>

              <div className='clearfix'>
              <button
                  type='button'
                  onClick={() => this.onLogin()}
                  className='width-35 pull-right btn btn-sm btn-primary'
                >
                  <i className='ace-icon fa fa-key'></i>
                  <span className='bigger-110'>Login</span>
                </button>
                <button
                  style={{ marginRight: 20 }}
                  type='button'
                  onClick={() => this.setState({ isLogin: false })}
                  className='width-35 pull-right btn btn-sm btn-primary'
                >
                  <i className='ace-icon fa fa-arrow-right'></i>
                  <span className='bigger-110'>Register</span>
                </button>
              </div>

              <div className='space-4'></div>
            </fieldset>
          </div>

          <div className='toolbar clearfix'>
            <div className='forgot-password-link' style={{ height: 40 }}></div>
          </div>
        </div>
      </div>
    )
  }

  signUp = () => {
    return (
      <div id='signup-box' className='signup-box no-border'>
        <div className='widget-body'>
          <div className='widget-main' style={{ textAlign: 'center' }}>
            <h4 className='header green lighter bigger'>
              <i className='ace-icon fa fa-users blue'></i>
              Registration
            </h4>

            <div className='space-6'></div>
            <p> Enter your details: </p>
            <fieldset>
              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={(field) => this.setState({ username: field.target.value })}
                  />
                  <i className='ace-icon fa fa-user'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(field) => this.setState({ password: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nama'
                    value={this.state.nama}
                    onChange={(field) => this.setState({ nama: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Tempat Lahir'
                    value={this.state.tempatLahir}
                    onChange={(field) => this.setState({ tempatLahir: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='Tanggal Lahir'
                    value={this.state.tanggalLahir}
                    onChange={(field) => this.setState({ tanggalLahir: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Alamat'
                    value={this.state.alamat}
                    onChange={(field) => this.setState({ alamat: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Telepon'
                    value={this.state.telepon}
                    onChange={(field) => this.setState({ telepon: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <div className='space-24'></div>

              <div className='clearfix'>
                <button type='reset' className='width-30 pull-left btn btn-sm'
                  onClick={() => this.setState({ isLogin: true })}
                >
                  <i className='ace-icon fa fa-refresh'></i>
                  <span className='bigger-110'>Cancel</span>
                </button>
                <button
                  type='button'
                  className='width-65 pull-right btn btn-sm btn-success'
                  onClick={() => this.onRegister()}
                >
                  <span className='bigger-110'>Register</span>

                  <i className='ace-icon fa fa-arrow-right icon-on-right'></i>
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='login-layout light-login'>
        <div className='main-container'>
          <div className='main-content'>
            <div className='row'>
              <div
                className='col-sm-10 col-sm-offset-1'
                style={{ height: window.innerHeight, marginTop: 150 }}
              >
                <div className='login-container' style={{ width: window.innerWidth * 0.2 }}>
                  <div className='center'>
                    <h1>
                      <span className='red'>SISTEM INFORMASI</span>
                      <br />
                      <span className='Grey' id='id-text2'>
                        KOPERASI
                      </span>
                    </h1>
                  </div>

                  <div className='space-6'></div>

                  <div className='position-relative'>
                    {this.state.isLogin && this.signIn()}
                    {!this.state.isLogin && this.signUp()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

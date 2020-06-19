import React, { Component } from 'react'
// import ListCoursesComponent from './ListCoursesComponent';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'
import CourseDataService from '../service/CourseDataService'

class AnggotaContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anggotas: [],
      message: null,
      ktp: '',
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      telepon: '',
      alamat: '',
      isAction: false,
      action: '',
    }
    this.refreshCourses = this.refreshCourses.bind(this)
  }

  componentDidMount() {
    // this.refreshCourses()
  }

  refreshCourses() {
    CourseDataService.retrieveAllCourse().then((response) => {
      this.setState({ anggotas: response.data })
    })
  }

  onSimpan = () => {
    console.log(this.state)
    this.setState({ isAction: false })
  }

  onEdit = (data) => {
    console.log(data)
    this.setState({
      ktp: data.ktp,
      nama: data.ktp,
      tempatLahir: data.tempatLahir,
      tanggalLahir:  data.tanggalLahir,
      alamat: data.alamat,
      telepon: data.telepon
    })
    this.setState({ isAction: true })
  }

  onDetail = (data) => {
    console.log(data)
    this.setState({
      ktp: data.ktp,
      nama: data.ktp,
      tempatLahir: data.tempatLahir,
      tanggalLahir:  data.tanggalLahir,
      alamat: data.alamat,
      telepon: data.telepon
    })
    this.setState({ isAction: true })
  }

  onTambah = (data) => {
    console.log(data)
    this.setState({ isAction: true })
  }

  form = () => {
    return (
      <div id='signup-box' className='signup-box no-border'>
        <div className='widget-body'>
          <div className='widget-main' style={{ textAlign: 'center' }}>
            <fieldset>
              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='KTP'
                    value={this.state.ktp}
                    onChange={(field) => this.setState({ ktp: field.target.value })}
                  />
                  <i className='ace-icon fa fa-user'></i>
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
                <button
                  type='button'
                  className='width-20 pull-right btn btn-sm btn-success'
                  onClick={() => this.onSimpan()}
                >
                  <span className='bigger-110'>Simpan</span>
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }

  detail = () => {
    return <div id='signup-box' className='signup-box no-border'>
    <div className='widget-body'>
      <div className='widget-main' style={{ textAlign: 'center' }}>
        <fieldset>
          <label className='block clearfix'>
            <span className='block input-icon input-icon-right'>
              <input
                readOnly
                type='text'
                className='form-control'
                placeholder='KTP'
                value={this.state.ktp}
                onChange={(field) => this.setState({ ktp: field.target.value })}
              />
              <i className='ace-icon fa fa-user'></i>
            </span>
          </label>

          <label className='block clearfix'>
            <span className='block input-icon input-icon-right'>
              <input
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
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
            <button
              type='button'
              className='width-20 pull-right btn btn-sm btn-success'
              onClick={() => this.setState({ isAction: false })}
            >
              <span className='bigger-110'>Cancel</span>
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='main-container ace-save-state' id='main-container'>
          <Sidebar {...this.props} />
          <div className='main-content'>
            <div className='main-content-inner'>
              <div className='breadcrumbs ace-save-state' id='breadcrumbs'>
                <ul className='breadcrumb'>
                  <li>
                    <i className='ace-icon fa fa-home home-icon'></i>
                    <a href='#'>Home</a>
                  </li>

                  <li>
                    <a href='#'>Anggota</a>
                  </li>
                </ul>

                <div className='page-content'>
                  <div className='page-header'>
                    <h1>
                      Menu Anggota
                      <small>
                        <i className='ace-icon fa fa-angle-double-right'></i>
                      </small>
                    </h1>
                  </div>

                  <button
                    style={{ marginBottom: 20 }}
                    type='button'
                    className='width-20 pull-right btn btn-sm btn-success'
                    onClick={() => this.onTambah()}
                  >
                    <span className='bigger-110'>Tambah</span>
                  </button>

                  <div className='row' style={{ minHeight: 300 }}>
                    <div className='col-xs-12'>

                      <table className='table table-bordered table-hover'>
                        <thead>
                          <tr>
                            <th>KTP</th>
                            <th>Nama</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Telepon</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.anggotas &&
                            this.state.anggotas.length > 0 &&
                            this.state.anggotas.map((anggota) => (
                              <tr key={anggota.id}>
                                <td>{anggota.ktp}</td>
                                <td>{anggota.nama}</td>
                                <td>{anggota.tempatLahir}</td>
                                <td>{anggota.tanggalLahir}</td>
                                <td>{anggota.alamat}</td>
                                <td>{anggota.telepon}</td>
                                <td>
                                <button
                                  type='button'
                                  className='width-20 pull-right btn btn-sm btn-success'
                                  onClick={() => this.onEdit(anggota)}
                                >
                                  <span className='bigger-110'>Edit</span>
                                </button>
                                <button
                                  type='button'
                                  className='width-20 pull-right btn btn-sm btn-success'
                                  onClick={() => this.onEdit(anggota)}
                                >
                                  <span className='bigger-110'>Edit</span>
                                </button>
                                <button
                                  type='button'
                                  className='width-20 pull-right btn btn-sm btn-success'
                                  onClick={() => this.onDetail(anggota)}
                                >
                                  <span className='bigger-110'>Detail</span>
                                </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {this.state.isAction && this.form()}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default AnggotaContainer

// alamat: "jakarta"
// id: 2
// nama: "dedik"
// nia: "1212"
// pengurus: true
// tanggalLahir: "1990-10-10"
// telepon: "085121212"
// tempatLahir: "jakarta"
// user:
// password: "zzzz"
// username: "dedik"
// uuid: "1"

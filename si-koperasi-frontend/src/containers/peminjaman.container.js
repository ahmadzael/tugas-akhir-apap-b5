import React, { Component } from 'react'
// import ListCoursesComponent from './ListCoursesComponent';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'
import CourseDataService from '../service/CourseDataService'

class PeminjamanContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pinjaman: [],
      message: null,
      tanggalPinjam: '',
      jumlah: '',
      isAction: false,
      action: '',
    }
    this.refreshPinjaman = this.refreshPinjaman.bind(this)
  }

  componentDidMount() {
    // this.refreshPinjaman()
  }

  refreshPinjaman() {
    CourseDataService.retrieveAllCourse().then((response) => {
      this.setState({ pinjaman: response.data })
    })
  }

  onSimpan = () => {
    console.log(this.state)
    this.setState({ isAction: false })
  }

  onEdit = (data) => {
    console.log(data)
    this.setState({
      tanggalPinjam:  data.tanggalPinjam,
      jumlah: data.jumlah
    })
    this.setState({ isAction: true })
  }

  onDetail = (data) => {
    console.log(data)
    this.setState({
      tanggalPinjam:  data.tanggalPinjam,
      jumlah: data.jumlah
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
                    type='date'
                    className='form-control'
                    placeholder='Tanggal Pinjam'
                    value={this.state.tanggalPinjam}
                    onChange={(field) => this.setState({ tanggalPinjam: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Jumlah'
                    value={this.state.jumlah}
                    onChange={(field) => this.setState({ jumlah: field.target.value })}
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
                type='date'
                className='form-control'
                placeholder='Tanggal Pinjam'
                value={this.state.tanggalPinjam}
                onChange={(field) => this.setState({ tanggalPinjam: field.target.value })}
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
                placeholder='Jumlah'
                value={this.state.jumlah}
                onChange={(field) => this.setState({ jumlah: field.target.value })}
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
                    <a href='#'>Peiminjaman</a>
                  </li>
                </ul>

                <div className='page-content'>
                  <div className='page-header'>
                    <h1>
                      Menu Peminjaman
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
                            <th>Tanggal Pinjam</th>
                            <th>Jumlah</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.pinjaman &&
                            this.state.pinjaman.length > 0 &&
                            this.state.pinjaman.map((pinjam) => (
                              <tr key={pinjam.id}>
                                <td>{pinjam.tanggalPinjam}</td>
                                <td>{pinjam.jumlah}</td>
                                <td>
                                <button
                                  type='button'
                                  className='width-20 pull-right btn btn-sm btn-success'
                                  onClick={() => this.onEdit(pinjam)}
                                >
                                  <span className='bigger-110'>Edit</span>
                                </button>
                                <button
                                  type='button'
                                  className='width-20 pull-right btn btn-sm btn-success'
                                  onClick={() => this.onDetail(pinjam)}
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

export default PeminjamanContainer

// alamat: "jakarta"
// id: 2
// nama: "dedik"
// nia: "1212"
// pengurus: true
// tanggalPinjam: "1990-10-10"
// jumlah: "085121212"
// tempatLahir: "jakarta"
// user:
// password: "zzzz"
// username: "dedik"
// uuid: "1"

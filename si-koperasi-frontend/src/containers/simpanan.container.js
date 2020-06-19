import React, { Component } from 'react'
// import ListCoursesComponent from './ListCoursesComponent';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'
import CourseDataService from '../service/CourseDataService'

class SimpananContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pinjaman: [],
      simpanans: [],
      anggotas: [],
      message: null,
      tanggalSetor: '',
      jumlah: '',
      jenisSimpanan: '',
      penyetor: '',
      penerima: '',
      isAction: false,
      action: '',
    }
    this.refreshPinjaman = this.refreshPinjaman.bind(this)
    this.refreshsimpanan = this.refreshsimpanan.bind(this)
    this.refreshAnggota = this.refreshAnggota.bind(this)
  }

  componentDidMount() {
    // this.refreshPinjaman()
    // this.refreshSimpanan()
    // this.refreshAnggota()
  }

  refreshPinjaman() {
    CourseDataService.retrieveAllCourse().then((response) => {
      this.setState({ pinjaman: response.data })
    })
  }

  refreshsimpanan() {
    CourseDataService.retrieveAllCourse().then((response) => {
      this.setState({ simpanans: response.data })
    })
  }

  refreshAnggota() {
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
      tanggalSetor: data.tanggalSetor,
      jumlah: data.jumlah,
      jenisSimpanan: data.jenisSimpanan,
      penyetor: data.penyetor,
      penerima: data.penerima,
    })
    this.setState({ isAction: true })
  }

  onDetail = (data) => {
    console.log(data)
    this.setState({
      tanggalSetor: data.tanggalSetor,
      jumlah: data.jumlah,
      jenisSimpanan: data.jenisSimpanan,
      penyetor: data.penyetor,
      penerima: data.penerima,
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
                    placeholder='Tanggal Setor'
                    value={this.state.tanggalSetor}
                    onChange={(field) => this.setState({ tanggalSetor: field.target.value })}
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

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Jenis Simpanan'
                    value={this.state.jenisSimpanan}
                    onChange={(field) => this.setState({ jenisSimpanan: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Penyetor'
                    value={this.state.penyetor}
                    onChange={(field) => this.setState({ penyetor: field.target.value })}
                  />
                  <i className='ace-icon fa fa-lock'></i>
                </span>
              </label>

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Penerima'
                    value={this.state.penerima}
                    onChange={(field) => this.setState({ penerima: field.target.value })}
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
    return (
      <div id='signup-box' className='signup-box no-border'>
        <div className='widget-body'>
          <div className='widget-main' style={{ textAlign: 'center' }}>
            <fieldset>
            <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    readOnly
                    type='date'
                    className='form-control'
                    placeholder='Tanggal Setor'
                    value={this.state.tanggalSetor}
                    onChange={(field) => this.setState({ tanggalSetor: field.target.value })}
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

              <label className='block clearfix'>
                <span className='block input-icon input-icon-right'>
                  <input
                    readOnly
                    type='text'
                    className='form-control'
                    placeholder='Jenis Simpanan'
                    value={this.state.jenisSimpanan}
                    onChange={(field) => this.setState({ jenisSimpanan: field.target.value })}
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
                    placeholder='Penyetor'
                    value={this.state.penyetor}
                    onChange={(field) => this.setState({ penyetor: field.target.value })}
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
                    placeholder='Penerima'
                    value={this.state.penerima}
                    onChange={(field) => this.setState({ penerima: field.target.value })}
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
    )
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
                    <a href='#'>Simpanan</a>
                  </li>
                </ul>

                <div className='page-content'>
                  <div className='page-header'>
                    <h1>
                      Menu Simpanan
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
                            <th>Tanggal Setor</th>
                            <th>Jumlah</th>
                            <th>Jenis Simpanan</th>
                            <th>Penyetor</th>
                            <th>Penerima</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.pinjaman &&
                            this.state.pinjaman.length > 0 &&
                            this.state.pinjaman.map((simpan) => (
                              <tr key={simpan.id}>
                                <td>{simpan.tanggalSetor}</td>
                                <td>{simpan.jumlah}</td>
                                <td>{simpan.jenisSimpanan}</td>
                                <td>{simpan.penyetor}</td>
                                <td>{simpan.penerima}</td>
                                <td>
                                  <button
                                    type='button'
                                    className='width-20 pull-right btn btn-sm btn-success'
                                    onClick={() => this.onEdit(simpan)}
                                  >
                                    <span className='bigger-110'>Edit</span>
                                  </button>
                                  <button
                                    type='button'
                                    className='width-20 pull-right btn btn-sm btn-success'
                                    onClick={() => this.onDetail(simpan)}
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

export default SimpananContainer

// alamat: "jakarta"
// id: 2
// nama: "dedik"
// nia: "1212"
// pengurus: true
// tanggalSetor: "1990-10-10"
// jumlah: "085121212"
// tempatLahir: "jakarta"
// user:
// password: "zzzz"
// username: "dedik"
// uuid: "1"

import React, { Component } from 'react'
// import ListCoursesComponent from './ListCoursesComponent';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'
import CourseDataService from '../service/CourseDataService'

class LaporanContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laporan: [],
      message: null,
    }
    this.refreshLaporan = this.refreshLaporan.bind(this)
  }

  componentDidMount() {
    // this.refreshLaporan()
  }

  refreshLaporan() {
    CourseDataService.retrieveAllCourse().then((response) => {
      this.setState({ laporan: response.data })
    })
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
                    <a href='#'>Laporan</a>
                  </li>
                </ul>

                <div className='page-content'>
                  <div className='page-header'>
                    <h1>
                      Menu Laporan
                      <small>
                        <i className='ace-icon fa fa-angle-double-right'></i>
                      </small>
                    </h1>
                  </div>

                  <div className='row' style={{ minHeight: 300 }}>
                    <div className='col-xs-12'>
                      <table className='table table-bordered table-hover'>
                        <thead>
                          <tr>
                            <th>No Urut</th>
                            <th>Tanggal</th>
                            <th>Simpanan</th>
                            <th>Pinjaman</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.laporan &&
                            this.state.laporan.length > 0 &&
                            this.state.laporan.map((lapor, i) => (
                              <tr key={lapor.id}>
                                <td>{i + 1}</td>
                                <td>{lapor.tanggal}</td>
                                <td>{lapor.simpanan}</td>
                                <td>{lapor.pinjaman}</td>
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

export default LaporanContainer

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

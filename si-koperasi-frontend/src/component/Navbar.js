// Header.js
import React, {Component} from 'react';

export default class Navbar extends Component {
    render(){
        return (
            <div id="navbar" className="navbar navbar-default          ace-save-state">
			<div className="navbar-container ace-save-state" id="navbar-container">
				<button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
					<span className="sr-only">Toggle sidebar</span>

					<span className="icon-bar"></span>

					<span className="icon-bar"></span>

					<span className="icon-bar"></span>
				</button>

				<div className="navbar-header pull-left">
					<a href="index.html" className="navbar-brand">
						<small>
							
							SISTEM INFORMASIKOPERASI
						</small>
					</a>
				</div>

				<div className="navbar-buttons navbar-header pull-right" role="navigation">
					<ul className="nav ace-nav">

						<li className="light-blue dropdown-modal">
							<a data-toggle="dropdown" href="#" className="dropdown-toggle">
								
								<span className="user-info">
									<small>Welcome,</small>
									Ahmad
								</span>

								<i className="ace-icon fa fa-caret-down"></i>
							</a>

							<ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i className="ace-icon fa fa-cog"></i>
										Settings
									</a>
								</li>

								<li>
									<a href="profile.html">
										<i className="ace-icon fa fa-user"></i>
										Profile
									</a>
								</li>

								<li className="divider"></li>

								<li>
									<a href="#">
										<i className="ace-icon fa fa-power-off"></i>
										Logout
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div> 
		</div>
 
        )
    }
}
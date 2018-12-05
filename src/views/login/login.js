import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter } from 'react-router-dom';
import axios from 'axios';
import url from '../url';
import Cookies from 'universal-cookie';
export default class login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			loggedIn: false,
		};
		this.handleemailChange = this.handleemailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleemailChange(event) {
		this.setState({ username: event.target.value });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post(url + '/login', { email: this.state.username, password: this.state.password }).then(res => {
			document.location = '/#/list';
		}, err => {
			alert("in correct password")
		})
	}
    render() {
        return (
           <div className="wrapper pa-0">
		
			<div className="page-wrapper pa-0 ma-0 auth-page">
				<div className="container-fluid">
					<div className="table-struct full-width full-height">
						<div className="table-cell vertical-align-middle auth-form-wrap">
							<div className="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
								<div className="row">
									<div className="col-sm-12 col-xs-12">
										
										<div className="mt-20">
											<h3 className="text-center txt-dark mb-10">Sign in</h3>
										</div>	
										<div className="form-wrap">
												<form method="post" onSubmit={this.handleSubmit}>
												<div className="form-group">
													<label className="control-label mb-10" for="exampleInputEmail_2">Username</label>
														<input type="text" className="form-control" required="" id="exampleInputEmail_2" onChange={this.handleemailChange} placeholder="Enter email"/>
												</div>
												<div className="form-group">
													<label className="pull-left control-label mb-10" for="exampleInputpwd_2">Password</label>
													<div className="clearfix"></div>
														<input type="password" className="form-control" required="" id="exampleInputpwd_2" onChange={this.handlePasswordChange} placeholder="Enter pwd"/>
												</div>
												
												<div className="form-group">
													<div className="checkbox checkbox-primary pr-10 pull-left">
															<NavLink to="/register"> Register</NavLink>
													</div>
													<div className="clearfix"></div>
												</div>
												<div className="form-group text-center">
														<button type="submit" className="btn btn-primary  btn-rounded" >sign in</button>
												</div>
											</form>
										</div>
									</div>	
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
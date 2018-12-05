import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter } from 'react-router-dom';
import Sidebar from '../sidebar'
import Header from '../header'
import Cookies from 'universal-cookie';
import axios from 'axios';
import url from '../url';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
const cookies = new Cookies();

function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}
class register extends Component {

    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            mobile_no: "",
            selectedDay: undefined,
            gender: "",

        };

        var name = this.handleNameChange;
        this.handlelNameChange = this.handlelNameChange.bind(this);
        this.handlefNameChange = this.handlefNameChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handlegenderChange = this.handlegenderChange.bind(this);
    }

    handleDayChange(day) {
        var u = new Date(day);
        var original_date = u.getFullYear() + '-' + ("0" + (u.getMonth() + 1)).slice(-2) + '-' +
            ('0' + u.getDate()).slice(-2)
        this.setState({ selectedDay: original_date });
    }

    handlegenderChange(event) {
        this.setState({ gender: event.target.value });
    }

    handlefNameChange(event) {
        this.setState({ first_name: event.target.value });
    }
    handlelNameChange(event) {
        this.setState({ last_name: event.target.value });
    }

    handleMobileChange(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({ mobile_no: event.target.value });
        }
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePassChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit  (event)  {
        event.preventDefault();

        axios.post(url + '/register',
            {
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
            }).then(res => {
                document.location = '/#/list';
            }, err => {
                console.log(err)
            })
    }


    render() {
        const FORMAT = 'YYYY-MM-DD';
        return (

          
                <div class="page-wrapper pa-0 ma-0 auth-page">
                    <div class="container-fluid">
                       
					<div class="table-struct full-width full-height">
                            <div class="table-cell vertical-align-middle auth-form-wrap">
                                <div class="auth-form  ml-auto mr-auto no-float card-view pt-30 pb-30">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="mb-30">
                                                <h3 class="text-center txt-dark mb-10">Register</h3>
                                                <h6 class="text-center nonecase-font txt-grey">Enter your details below</h6>
                                            </div>
                                            <div class="form-wrap">
                                            <form method="post" className="form-horizontal form-material" required onSubmit={this.handleSubmit}>
                                                <div className="form-group row m-b-20">
                                                  
                                                    <div className="col-md-12" style={{ marginBottom: '.9rem' }}>
                                                        <label >Name </label>
                                                        <input className="form-control" autoComplete="off" required type="text" onChange={this.handlelNameChange} placeholder="Name " />
                                                    </div>
                                                  
                                                    <div className="col-md-12" style={{ marginBottom: '.9rem' }}>
                                                        <label > Email</label>
                                                        <input className="form-control" autoComplete="off" required type="email" onChange={this.handleEmailChange} placeholder="Email id " />
                                                    </div>
                                                    <div className="col-md-12" style={{ marginBottom: '.9rem' }}>
                                                        <label > Password</label>
                                                        <input className="form-control" autoComplete="off" required type="password" onChange={this.handlePassChange} placeholder="Password " />
                                                    </div>
                                                </div>

                                                <div className="form-group  m-t-10">
                                                    <div className="col-md-12">
                                                        <button type="submit" class="btn btn-primary" style={{ margin: "0 auto", display:"-webkit-box"}}>Sign Up</button>
                                                    </div>
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

        );
    }
}

export default register;

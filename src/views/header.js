import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter, browserHistory } from 'react-router-dom';
import $ from 'jquery';
class header extends Component {
   
    componentDidMount() {
        $('.toggle-left-nav-btn inline-block ml-20 pull-left').on('click', function () {
            $('.wrapper theme-5-active ').toggleClass("wrapper theme-5-active slide-nav-toggle");
            var className = $('.fixed-sidebar-left').attr('class');
            console.log(className)
            if (className == 'wrapper theme-5-active  slide-nav-toggle') {
                $('.fixed-sidebar-left').css("display", 'none');
            } else {
                if ($(window).width() < 1200) {
                    $('.fixed-sidebar-left').css("display", '-webkit-box');
                } else {
                    $('.fixed-sidebar-left').css("display", 'table-cell');
                }
            }
        });

      
    }
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            con_password: "",
            mobile_no: "",
            file: "http://carryyear.com:3034/img/user1.jpg"
        };
    }

    logout(event) {
        event.preventDefault();
    
        document.location = '/';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="mobile-only-brand pull-left">
                    <div className="nav-header pull-left">
                        <div className="logo-wrap">
                         <p>Demo </p>
                        </div>
                    </div>
                    <a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block ml-20 pull-left" style={{cursor:"pointer"}}><i className="zmdi zmdi-menu"></i></a>
              
                    <a id="toggle_mobile_nav" className="mobile-only-view" ><i className="zmdi zmdi-more"></i></a>
                  
			</div>
                <div id="mobile_only_nav" className="mobile-only-nav pull-right">
                    <ul className="nav navbar-right top-nav pull-right">
                    <li className="dropdown auth-drp">
                            <a className="dropdown-toggle pr-0" data-toggle="dropdown"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhESBw0RFhAXFRETFRYWDRAVFRISFxUWGBUVExUYHCkhGh0lGxUWITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDQ0NDw8PFTEZFRkrKysrKzcrNys3Kzc3NysrKy0tLSstKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADIQAQABAgMFBgUEAwEAAAAAAAABAgMEBRESITFBcVFhgaGxwRMUMjSRInLR4VKS8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1RRNyrSiJmQcvsRtTpEb12jLKqvrmI85aOHw1OHp/RG/t5yauMy1l1df1aRHfx/CenKv8q5/1aQmmM6cqjlXP4hHXlcx9FcT1iYaoaYwbuErtfXTOnbG+ED0qricDTejWndV2xz6waYxBJetTZr0uRv9eiNUAAAAAAAAAAAAAAAAAAG5gcP8CzGsfqnfP8MjD0beIpjvh6BKsAEUAAAAABBjMPGItac+U97CmNmdJ4vSMjNbWxfiqOE+sLEqiAqAAAAAAAAAAAAAAAALOXxrjKfH0luMTLfvKfH0ltpVgAigAAAAACnmtG1hdeyYn291xWzH7OrXu9YBhgNMgAAAAAAAAAAAAAAALWXfeU+PpLbYWAnTGU9faW6lWACKAAAAAAMTMqpnF1RM7o0038N0NthY6dcXX19liVXAVAAAAAAAAAAAAAAAAFjBUz8zTMROmscuDdQ4SjYw1MU9kT4ymStQAQAAAAAAGBi4n5mraieM8u9vquZ0bWEnXlpMflYlYgCoAAAAAAAAAAAAAAAA3Mvr28JT3bvwss3J7m6qmesek+zSZaAAAAAAAAFLNq9nDadsx5b11k5vc2r0UxyjzlYKACsgAAAAAAAAAAAAAAAJcPemxdiqn/sNvC3/AJiztRGnHdq8+08nubqqfH2n2SrGkAigAAAAAIMXiPl7Wumu/TixLtc3bkzVxlfziv6aes+0e7NaiUAEAAAAAAAAAAAAAAAAE2EvfAvxPLhPRCA9LE6xuFLKrk14fSrlOkdF1loAAAABWzCuaMJOx3R4SDKxl342ImY4cI6QgBpkAAAAAAAAAAAAAAAAAAABsZTGmGn90+kLqvl9OxhKdev5nVYZaAAAAFbMI1wdXh6wso8RRt2KojnEx5A88A0yAAAAAAAAAAAAAAAAAAOqKPiVxFPGZ0KKJrq0oiZlrYDBfA/Vd+r0/sVcpjZpiI6PoMqAAAAAAwMVb+FiKo793SeCFt47CfM0607qo4d/dLHu25tVaXI0lqI4AEAAAAAAAAAAAAB9iNqdKY3r2Hy2a996dI7Of9Ao00zXVpTGs9F/D5ZNW+/OndHH8tGzZps06W409Z6ykTVxxatRZp0txEOwRQAAAAAAABzcoi5TpXETDoBm4jLOdifCfaWdctzbq0uRMS9G4uW4u06XIiYXUx50aWIyzTfYnwn2ln10TRVpXExKpjkAAAAAAH2I1ncD4t4XA1Xt9W6nznpC3gsBsRtX41ns5R/a+mriKxh6bEf+cePOfFKCKAAAAAAAAAAAAAAAAI71mm9TpcjX26SkAZGJy6be+zvjzj+VF6VTxmCi/GtG6rynqupjGHVdM0VTFUaTDlUAAGllWH1/XXH7feWdTG1VERxnc9Fbo+HbiKeERoVY6AZUAAAAAAAAAAAAAAAAAAAAABRzPD7dvap4xx74ZD0sxrG956/b+Feqp7J8uSxKjAVE2F+5o/dHq3wSrABFAAAAAAAAAAAAAAAAAAAAAAGJmX3lXh6QCxKqgKj/2Q==" alt="user_auth" className="user-auth-img img-circle" style={{ cursor: "pointer" }}/><span className="user-online-status"></span></a>
                        <ul className="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                                <li style={{ cursor: "pointer" }}>
                                    <NavLink to="/profile"><i className="zmdi zmdi-account"></i><span>Profile</span></NavLink>
                            </li>
                         
                           
                           
                            <li className="divider"></li>
                                <li style={{ cursor:"pointer"}}>
                                    <a onClick={this.logout}> <i className="zmdi zmdi-power"></i><span>Log Out</span></a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </div>

		</nav>
        );
    }
}

export default header;

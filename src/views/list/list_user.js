import React, { Component } from 'react';
import Header from '../header';
import SideBar from '../sidebar';
import url from '../url';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class List extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        window.postMessage('renderTable', '*');
        // this.updateState = this.updateState.bind(this);
    }
    componentDidMount() {
        axios.get(url + "/list_user").then(res => {
            const k = 1;
            for (let i = 0; i < res.data.data.length; i++) {
                res.data.data[i].sno = k + +i;
            }
            this.setState({ data: res.data.data });
        }, err => {
            document.location = "/#/"
        })
    }

    render() {
        return (
            <div>
            <Header/>
            <SideBar/>
           
           <div className="page-wrapper" style={{minHeight:"1000px",height:"100%"}}>
            <div className="container-fluid">
				<div className="row heading-bg">
					<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h5 className="txt-dark"> List</h5>
					</div>
					<div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <ol className="breadcrumb">
						<li className="active"><span>List</span></li>
					  </ol>
					</div>
				</div>
			
                        <div className="col-lg-12 card-view" style={{paddingBottom:"20px",padding:"30px"}}>
                           
                            <BootstrapTable data={this.state.data} trClassName={this.rowClassNameFormat} pagination search>
                                <TableHeaderColumn width='50px' dataField='sno' isKey={true} dataSort={true} dataAlign='center'>S.No</TableHeaderColumn>
                                <TableHeaderColumn width='150px' dataField='name' headerAlign='center' dataSort={true} dataAlign='center'>Name</TableHeaderColumn>
                                <TableHeaderColumn width='150px' dataField='email' headerAlign='center' dataSort={true} dataAlign='center'>Email</TableHeaderColumn>
                              
                            </BootstrapTable>
				</div>
				
			</div>	
			
        </div>
            </div>
        )
    }
}
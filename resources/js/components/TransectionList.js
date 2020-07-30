import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Pagination from 'react-js-pagination';

class TransectionList extends Component{
    constructor(){
        super();
        this.state = {
            transectionList : [],
            // activePage : 1,
            // itemsCountPerPage : 1,
            // totalItemsCount : 1
            
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/transectionList')
        .then(response => {
            this.setState({
                transectionList : response.data
            })
        })
    }

    //Genarate PDF Function
    jsPDGGenerator(){
        const doc = new jsPDF();
        doc.text(20,20,'All Transection List');
        doc.autoTable({html:'#tdata'});
        doc.save('Data.pdf');
    }


    //Handle Page Change on Pagination
    // handlePageChange(pageNumber){
    //     console.log('active page is : '+ pageNumber);
    //     this.setState({
    //         activePage : pageNumber
    //     })
    // }

    render(){
        return(
            <div className="container bg card">
                <br/>
                <center>
                    <h4 className="text-primary">All Transection List</h4>
                </center>

                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <button className="downloadButton" onClick = {() => this.jsPDGGenerator()}>Download PDF</button>
                    </div>
                </div> 


                <table className="table  table-hover" width="100%" id="tdata">
                    <thead>
                        <tr>
                           <th >TrnxDate</th>
                            <th >Type</th>
                            <th >Amount</th>
                            <th >Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.transectionList.map(transectionList => {
                                return(
                                        <tr>
                                            <td>{transectionList.TransectionDate} </td>
                                            <td>{transectionList.Type}</td>
                                            <td>{transectionList.Amount}</td>
                                            <td>{transectionList.Description}</td>
                                            
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                    <hr/>
                    <hr/>
                </table>  
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        {/* Pagination Links Here */}
                        {/* <Pagination
                            activePage = {this.state.activePage}
                            itemsCountPerPage = {10}
                            totalItemsCount = {450}
                            pageRangeDisplayed = {5}
                            onChange = {this.handlePageChange}
                        /> */}
                    </div>
                    <div className="col-sm-4">
                        {/* Download PDF Button Here */}
                        <button className="downloadButton" onClick = {() => this.jsPDGGenerator()}>Download PDF</button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default TransectionList
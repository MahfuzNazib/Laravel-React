import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Accounts extends Component{
    constructor(){
        super();
        this.state = {
            costs : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/accounts')
        .then(response => {
            this.setState({costs:response.data});
        })
    }
    render(){
        return(
            <div className="container bg card">
                <br/>
                <center>
                    <h4 className="text-success">Accounts Section</h4>
                </center>
    
                <div className="row">
                    <div className="col-sm-5">
                        <div class="card">
                            <div class="card-header alert alert-primary">
                                <center>
                                    Add New Transection
                                </center>
                            </div>
                            <div class="card-body">
                                <form>
                                    <label>Transedtion Date</label>
                                    <input type="date" className="form-control" name="TransectionDate" id="TransectionDate" />
    
                                    <label>Type</label>
                                    <select className="form-control" name="type" id="type">
                                        <option selected disabled>Select Type Here</option>
                                        <option>University</option>
                                        <option>Housing</option>
                                        <option>Father's</option>
                                        <option>Others</option>
                                    </select>
    
                                    <label>Amount</label>
                                    <input type="number" className="form-control" name="amount" id="amount" />
                                    <label>Description</label>
                                    <textarea className="form-control" name="description" id="description" />
                                </form>
                            </div>
                            <div class="card-footer">
                                <center>
                                    <input type="submit" className="btn btn-primary" value="Save Transection"/>
                                </center>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-7">
                        <div className="card">
                            <div className="card-header alert alert-success">
                                <center>All Transection List</center>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>TrnxDate</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.costs.map(costs => {
                                                return(
                                                    <tr>
                                                        <td>{costs.TransectionDate}</td>
                                                        <td>{costs.Type}</td>
                                                        <td>{costs.Amount}</td>
                                                        <td>
                                                            <button className="btn btn-info">
                                                               <h4>:</h4>
                                                            </button> | 
                                                            <button className="btn btn-danger">
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accounts
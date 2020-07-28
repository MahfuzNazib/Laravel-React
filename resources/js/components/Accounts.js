import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Accounts extends Component{
    constructor(){
        super();
        this.state = {
            costs : [],
            transectionDate : '',
            type : '',
            amount : '',
            description : ''
        };
        this.handleTransectionDate = this.handleTransectionDate.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //GET All Data From DB
    componentDidMount(){
        axios.get('http://localhost:8000/accounts')
        .then(response => {
            this.setState({costs:response.data});
        })
    }

    handleTransectionDate(e){
        this.setState({
            transectionDate : e.target.value,
        });
    }

    handleType(e){
        this.setState({
            type : e.target.value
        })
    }

    handleAmount(e){
        this.setState({
            amount : e.target.value
        })
    }

    handleDescription(e){
        this.setState({
            description : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/accounts/store', {
            transectionDate : this.state.transectionDate,
            type : this.state.type,
            amount : this.state.amount,
            description : this.state.description,
        })
        .then(res => {
            console.log(res.data);
            this.setState({
                costs : res.data,
                transectionDate : '',
                type : '',
                amount : '',
                description : ''
            })
        });
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
                                <form onSubmit = {this.handleSubmit}>
                                    <label>Transedtion Date</label>
                                    <input type="date" 
                                        className="form-control" 
                                        name="TransectionDate"
                                        value={this.state.transectionDate}
                                        onChange = {this.handleTransectionDate}
                                        id="TransectionDate" />
    
                                    <label>Type</label>
                                    <select className="form-control" 
                                        name="type"
                                        value={this.type}
                                        onChange={this.handleType} 
                                        id="type">
                                        <option selected disabled>Select Type Here</option>
                                        <option>University</option>
                                        <option>Housing</option>
                                        <option>Father's</option>
                                        <option>Others</option>
                                    </select>
    
                                    <label>Amount</label>
                                    <input type="number" 
                                        className="form-control" 
                                        name="amount"
                                        value={this.amount}
                                        onChange={this.handleAmount} 
                                        id="amount" />
                                    <label>Description</label>
                                    <textarea 
                                        className="form-control" 
                                        name="description"
                                        value={this.description}
                                        onChange={this.handleDescription} 
                                        id="description" />
                                    <br/>
                                    <center>
                                        <input type="submit" className="btn btn-primary" value="Save Transection"/>
                                    </center>
                                </form>
                            </div>
                            <div class="card-footer">
                                <center>
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
                                <table className="table  table-hover" width="80%">
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
                                                               Edit
                                                            </button> | 
                                                            <button className="btn btn-danger">
                                                                Delete
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
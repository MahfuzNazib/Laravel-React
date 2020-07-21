import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Accounts extends Component{
    constructor(){
        super();
        this.onChangeDataSave = this.onChangeDataSave.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            costs : [],
            transectionDate : '',
            type : '',
            amount : '',
            description : ''
        }
    }

    onChangeDataSave(e){
        this.setState({
            transectionDate : e.target.value,
            type : e.target.value,
            amount : e.target.value,
            description : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const cost = {
            transectionDate : this.state.transectionDate,
            type : this.state.type,
            amount : this.state.amount,
            description : this.state.description
        }
        axios.post('http://localhost:8000/accounts/store', cost)
        .then(response => console.log(response.data));
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
                                <form onSubmit = {this.onSubmit}>
                                    <label>Transedtion Date</label>
                                    <input type="date" 
                                        className="form-control" 
                                        name="TransectionDate"
                                        value={this.state.transectionDate}
                                        onChange = {this.onChangeDataSave}
                                        id="TransectionDate" />
    
                                    <label>Type</label>
                                    <select className="form-control" 
                                        name="type"
                                        value={this.type}
                                        onChange={this.onChangeDataSave} 
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
                                        onChange={this.onChangeDataSave} 
                                        id="amount" />
                                    <label>Description</label>
                                    <textarea 
                                        className="form-control" 
                                        name="description"
                                        value={this.description}
                                        onChange={this.onChangeDataSave} 
                                        id="description" />
                                    <br/>
                                    <input type="submit" className="btn btn-primary" value="Save Transection"/>

                                </form>
                            </div>
                            <div class="card-footer">
                                <center>
                                    {/* <input type="submit" className="btn btn-primary" value="Save Transection"/> */}
                                </center>
                            </div>
                            {/* </form> */}

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
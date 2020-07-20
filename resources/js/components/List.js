import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

class List extends Component{
    constructor(){
        super();
        this.state = {
            lists : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/list')
        .then(response => {
            this.setState({lists:response.data});
            console.log(this.lists);
        });
    }
    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>TrnxDate</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.lists.map(lists =>{
                                return(
                                    <tr>
                                        <td>{lists.TransectionDate}</td>
                                        <td>{lists.Type}</td>
                                        <td>{lists.Description}</td>
                                        <td>{lists.Amount}</td>
                                        <td>
                                            <button className="btn btn-success">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List

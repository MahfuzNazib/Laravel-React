import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { data } from 'jquery';

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movieList : [],
            movieName : '',
            moviePrice : '',
            releaseDate : '',
            id : '',
            save : true,
            update : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMoviePrice = this.handleMoviePrice.bind(this);
        this.handleReleadeDate = this.handleReleadeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    // Get All Data from DataBase
    componentDidMount(){
        axios.get('http://localhost:8000/movieList')
        .then(response => {
            console.log(response.data);
            this.setState({
                movieList : response.data
            })
        })
    }

    handleChange(e){
        this.setState({
            movieName : e.target.value
        })
    }

    handleMoviePrice(e){
        this.setState({
            moviePrice : e.target.value
        })
    }

    handleReleadeDate(e){
        this.setState({
            releaseDate : e.target.value
        })
    }

    handleDelete(id){
        console.log(id);
        axios.get(`http://localhost:8000/movieList/delete/${id}`)
        .then(response => {
            this.setState({
                movieList : response.data
            })
        });
    }

    handleEdit(id){
        console.log(id);
        axios.get(`http://localhost:8000/movieList/edit/${id}`)
        .then(response => {
            this.setState({
                // movieList : response.data
                movieName : response.data['movieName'],
                moviePrice : response.data['price'],
                releaseDate : response.data['releaseDate'],
                id : response.data['id']
            })
        });
    }

    changeState(){
        this.setState({
            save : false,
            update : true,
        })
    }

    handleSubmit(e){
        e.preventDefault();

        if(!this.state.save){
            let id = this.state.id;
            axios.post(`http://localhost:8000/movieList/edit/${id}`,{
                movieName : this.state.movieName,
                moviePrice : this.state.moviePrice,
                releaseDate : this.state.releaseDate,
            })
            .then(response => {
                this.setState({
                    movieList : response.data
                })
            })
            console.log(this.state.movieList);
        }
        else if(this.state.save){
            axios.post('http://localhost:8000/movieList/store',{
                movieName : this.state.movieName,
                moviePrice : this.state.moviePrice,
                releaseDate : this.state.releaseDate,
            })
            .then(res => {
                console.log(res.data);
                this.setState({
                    movieList : res.data,
                    movieName : '',
                    moviePrice : '',
                    releaseDate : ''
                })
            });
            console.log('Save Button Clicked');
            console.log(this.state.save);
        }
        
    }

    getButtonController(){
        let output = null;
        if(this.state.id){
            console.log('ID : ' + this.state.id)
            output = (
                <div>
                    <input type="submit" onClick = {() => this.changeState()} className="btn btn-primary" value="Update" />
                </div>
            )
            return output;
        }
        else{
            console.log('ID : নাই')
            output = (
                <div>
                    <input type="submit" className="btn btn-success" value="Save" />
                </div>
            )
            return output
        }
    }
    
    render(){
        return(
            <div className="container bg card">
                <br/>
                <center>
                    <h4 className="text-primary">Movie List</h4>
                </center>
                <hr/>

                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit = {this.handleSubmit}>
                            <label>Movie Name</label>
                            <input type="text"
                                onChange={this.handleChange}
                                value = {this.state.movieName}     
                                className="form-control"/>

                            <label>Movie Cost</label>
                            <input type="number"
                                onChange = {this.handleMoviePrice}
                                value = {this.state.moviePrice} 
                                className="form-control"/>

                            <label>Release Date</label>
                            <input type="date"
                                onChange = {this.handleReleadeDate}
                                value = {this.state.releaseDate} 
                                className="form-control"/>

                            <br/>
                            <center>
                                {/* <input type="submit" className="btn btn-primary" value="Save Movie Data"/> */}
                                {this.getButtonController()}
                            </center>
                        </form>
                    </div>

                    {/* Show Saved Movie List  */}

                    <div className="col-sm-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>MovieName</th>
                                    <th>Price</th>
                                    <th>ReleaseDate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.movieList.map(
                                        movieList => 
                                        <tr>
                                            <td>{movieList.movieName}</td>
                                            <td>{movieList.price}</td>
                                            <td>{movieList.releaseDate}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick = {() => this.handleEdit(movieList.id)}>
                                                    ::
                                                </button> | 
                                                <button className="btn btn-danger" onClick = {() => this.handleDelete(movieList.id)}>
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList
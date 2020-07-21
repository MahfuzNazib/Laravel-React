import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movieList : [],
            movieName : '',
            moviePrice : '',
            releaseDate : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMoviePrice = this.handleMoviePrice.bind(this);
        this.handleReleadeDate = this.handleReleadeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            movieName : e.target.value
        })
    }

    handleMoviePrice(e){
        console.log(e.target.value);
        this.setState({
            moviePrice : e.target.value
        })
    }

    handleReleadeDate(e){
        console.log(e.target.value);
        this.setState({
            releaseDate : e.target.value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:8000/movieList')
        .then(response => {
            console.log(response.data);
            this.setState({
                movieList : response.data
            })
        })
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/movieList/store',{
            movieName : this.state.movieName,
            moviePrice : this.state.moviePrice,
            releaseDate : this.state.releaseDate,
        })
        .then(res => {
            console.log(res.data);
            this.setState({
                movieList : res.data
            })
        });
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
                                <input type="submit" className="btn btn-primary" value="Save Movie Data"/>
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
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    // this.state.movieList.map(
                                    //     data => 
                                    //     <tr>
                                    //         <td>{data.movieName}</td>
                                    //         <td>{data.price}</td>
                                    //         <td>{data.releaseDate}</td>

                                    //     </tr>
                                    // )
                                    this.state.movieList.map(
                                        movieList => 
                                        <tr>
                                            <td>{movieList.movieName}</td>
                                            <td>{movieList.price}</td>
                                            <td>{movieList.releaseDate}</td>

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
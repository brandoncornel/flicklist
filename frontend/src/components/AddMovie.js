import React, { Component } from 'react'
import axios from 'axios'
import MovieSearchResult from './MovieSearchResult'

export default class AddMovie extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      movieTitle : '',
      movieDirector: '',
      moviePriority: 0,
      movieDescription: '',
      movieIMDBScore: 0.0,
      movieResults : []
    }

    this.IMDB_API_KEY = 'e69a68be'
    this.TMDB_API_KEY = '4f58fbe33ee7f3db83aba8ff74c5cdcd'
  }

  onSubmit(e){
    e.preventDefault();

    console.log('Form submitted');

    this.setState({
      movieTitle : '',
      movieDirector: '',
      moviePriority: 0,
      movieDescription: '',
      movieIMDBScore: 0.0
    })
  }

  handleChange(e){
   if(e.target.value.length !== 0){
     axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.TMDB_API_KEY + '&language=en-US&query=' + e.target.value + '&page=1&include_adult=false')
    .then(response => {
      this.setState({
        movieResults: response.data.results
      })
    }).catch(function (err){
      console.log(err);
    })
    }
  }

  handleAddMovieFromResults(data){
    axios.get('http://www.omdbapi.com/?apikey=' + this.IMDB_API_KEY + '&t=' + data.title)
    .then(response => {
      console.log(response.data)
    }).catch(function (err){
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h2>Add a Movie to your queue</h2>
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
        {this.state.movieResults.map((item)=>{
          return(<MovieSearchResult addMovie = {this.handleAddMovieFromResults.bind(this, item)}key = {item.id} data = {item}/>)
        })}    
    
      </div>
    )
  }
}

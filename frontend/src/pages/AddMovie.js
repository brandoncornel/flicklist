import React, { Component } from 'react'
import AddMovieStep1 from '../components/AddMovie/AddMovieStep1'
import AddMovieStep2 from '../components/AddMovie/AddMovieStep2'
import axios from 'axios'



export default class AddMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
          addStep: 0,
          selectedMovie: null
        }
        this.IMDB_API_KEY = 'e69a68be'
        this.TMDB_API_KEY = '4f58fbe33ee7f3db83aba8ff74c5cdcd'
      }

      handleAddMovieFromResults(data){
        axios.get('http://www.omdbapi.com/?apikey=' + this.IMDB_API_KEY + '&t=' + data.title)
        .then(response => {
            this.setState({
                selectedMovie: response.data,
                addStep: this.state.addStep+1
            })
        }).catch(function (err){
          console.log(err);
        })
      }
    
      openStep(){
        this.setState({
            addStep: this.state.addStep-1,
            selectedMovie: null
        })
      }

    render() {
        return (
        <div>
            <h1>Add a movie your queue</h1>
            <br/>
            <br/>
            <br/>
            <AddMovieStep1 openStep = {this.openStep.bind(this)} IMDB_API_KEY = {this.IMDB_API_KEY} the_TMDB_API_KEY = {this.TMDB_API_KEY} handleAddMovieFromResults = {this.handleAddMovieFromResults.bind(this)} addMovieStep = {this.state.addStep}/>
            <br/>
            <br/>
            <br/>

            <AddMovieStep2 openStep = {this.openStep.bind(this)} selectedMovie = {this.state.selectedMovie} addMovieStep = {this.state.addStep}/>
        </div>
    )
  }
}

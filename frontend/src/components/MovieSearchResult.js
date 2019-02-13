import React, { Component } from 'react'

export default class MovieSearchResult extends Component {

  render() {

    if(this.props.data.poster_path == null){
        return (
            <div></div>
          )
    }
      

    return (
      <div>
        <h4>{this.props.data.title}</h4>
        <p>{this.props.data.overview}</p>
        <img alt = {this.props.data.title} src={'http://image.tmdb.org/t/p/w185/' + this.props.data.poster_path}/>
        <button onClick = {this.props.addMovie}>Add Movie</button>
      </div>
    )
  }
}

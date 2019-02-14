import React, { Component } from 'react'
import axios from 'axios'
import MovieSearchResult from './MovieSearchResult'
import {Container, Row, Col} from 'reactstrap'
export default class AddMovieStep1 extends Component {
  
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.state = {
          movieResults: []
        }
      }
      
      componentDidMount(){
        this.setState({
          movieResults: [],
        })
    
      }    
      handleChange(e){
        if(e.target.value.length !== 0){
          axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.props.the_TMDB_API_KEY + '&language=en-US&query=' + e.target.value + '&page=1&include_adult=false')
         .then(response => {
           this.setState({
             movieResults: response.data.results
           })
         }).catch(function (err){
           console.log(err);
         })
         }
       }

       
      
  render() {

    let resultCards = this.state.movieResults.map((item)=>{
        return(
            <Col sm="4">
                <MovieSearchResult addMovie = {this.props.handleAddMovieFromResults.bind(this, item)}key = {item.id} data = {item}/>
            </Col>
        )
    })

    var component = (
        <div>
            <Container fluid>
            <h3>Search for next movie</h3>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
          <br></br>
          <Row>
              {resultCards}
          </Row>
          </Container>
        </div>
      )
    if(this.props.addMovieStep !== 0){
        component = (<div onClick = {        this.props.openStep        }><h3>Search for next movie</h3></div>)
    }
    return (
      <div>
        {component}
      </div>
    )
  }
}

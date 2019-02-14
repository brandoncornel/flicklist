import React, { Component } from 'react'
import {Card, CardImg, CardBlock, CardTitle, Button, CardText} from 'reactstrap'
import ReactFitText from 'react-fittext'

export default class MovieSearchResult extends Component {

  render() {

    if(this.props.data.poster_path == null){
        return (
            <div></div>
          )
    }
      

    return (
      <div>
        <Card style={{width:"50%", height:"20%"}}>
        <CardImg top width = "100%" alt = {this.props.data.title} src={'http://image.tmdb.org/t/p/w185/' + this.props.data.poster_path}/>
        <CardBlock>
        
        <CardTitle>{this.props.data.title}</CardTitle>
        <Button onClick = {this.props.addMovie}>Add Movie</Button>
        </CardBlock>
        </Card>
      </div>
    )
  }
}

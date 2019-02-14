import React, { Component } from 'react'

export default class AddMovieStep2 extends Component {

  constructor(props){
      super(props);
  }

  render() {

   var component = (<div onClick = {this.props.openStep}><h3>CLOSED STEP 2</h3></div>)

    if(this.props.addMovieStep === 1){
        component = (<div>
            <h3>Adding: {this.props.selectedMovie.Title}</h3>
        </div>)
    }

    return (
    <div class="container">
      {component}
      </div>
    )
  }
}

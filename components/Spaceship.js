import React from 'react'

class Spaceship extends React.Component{
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets}</h2>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false
}
export default Spaceship

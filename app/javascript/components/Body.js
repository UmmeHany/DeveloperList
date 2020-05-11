
import React, { Component } from 'react'
import AllDevelopers from '../components/AllDevelopers'

class Body extends Component {

  render() {

	  const tablewrap = {
      margin: 'auto',
      height: '500px',
      width: '80%',
      overflowY: 'auto',
      overflowX: 'auto'
    }

    return (
      <div style={tablewrap}>
        <AllDevelopers />
      </div>
      
    )
  }
	
}

export default Body

import React, { Component } from 'react'

class Header extends Component {
	
	render() {

    	const  toptext = {
            textAlign: 'center', 
            fontSize: '18',
            marginTop: '20px',
            width: '200', 
            fontWeight: 'bold'
        }
    
        return (
            <div style={toptext}>
                <h1>Ruby Developer List</h1>
            </div>  
        )
    }
	
}

export default Header
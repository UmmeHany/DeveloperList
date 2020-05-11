
import React, { Component } from 'react'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import * as ReactBootstrap from 'react-bootstrap'


class AllDevelopers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount() {

        fetch("/api/v1/developer.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },

                (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                    });
                }
            )
    }
    
    render() {

        const { error, isLoaded, items } = this.state;
        const tablehead = {
            position: 'sticky', 
            top: '0', 
            width: '40px',
            backgroundColor:'#348ecf',
            color:'white', 
            fontWeight: 'bold'
        }

        if(error){
            return <div>Error in loading</div>
        }
        else if (!isLoaded) {
            return <div>Loading ...</div>
        }
        else{

            return (
            
                <ReactBootstrap.Table striped bordered hover>

                    <thead >
                        <tr>
                          
                            <td  style={tablehead}>Name</td>
                            <td  style={tablehead}>Username</td>
                            <td  style={tablehead}>Avatar</td>
                            <td  style={tablehead}>Repo</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item.username} >

                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.avatar}</td>

                                    <td>
                                        <ReactBootstrap.Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Description</td>
                                                    <td>url</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{item.repo.name}</td>
                                                    <td>{item.repo.description}</td>
                                                    <td>{item.repo.url}</td>
                                                </tr>
                                            </tbody>

                                        </ReactBootstrap.Table >

                                    </td>

                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </ReactBootstrap.Table>
            );
        }

    }
    
}

export default AllDevelopers
import React, { Component } from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Searchresult.css'

class Searchresult extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return ( <div className="SearchResult">
            <h2>Results</h2>
            <Tracklist tracks={this.props.SearchResult} onAdd={this.props.onAdd}></Tracklist>
        </div> );
    }
}
 
export default Searchresult;
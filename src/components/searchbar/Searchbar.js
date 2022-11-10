import React, {Component} from "react";
import './Searchbar.css';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    handleTermChange = (event) => {
        this.setState({term: event.target.value});
    }

    search = () => {
        this.props.onSearch(this.state.term);
    }

    handleEnter = (event) => {
        if(event.keyCode === 13) {
            this.search();
        }
    }

    render() { 
        return ( <div className="Searchbar">
            <input type="text" placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handleEnter} />
            <button className="Searchbutton" onClick={this.search} >SEARCH</button>
        </div> );
    }
}
 
export default Searchbar;
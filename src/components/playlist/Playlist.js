import React, { Component } from "react";
import Tracklist from "../Tracklist/Tracklist";

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    }


    render() { 
        return ( <div className="Playlist">
            <input type="text" onChange={this.handleNameChange} defaultValue="New Playlist" />
            <Tracklist
                tracks={this.props.PlayListTracks} 
                isRemoval={true}
                onRemove={this.props.onRemove} />
            <button className="PlayList-save" onClick={this.props.onSave}>Save to Spotify</button>
        </div> );
    }
}
 
export default Playlist;
import React, { Component } from "react";
import Track from "../Track/Track";

class Tracklist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return ( 
            <div className="Tracklist">
                {
                    this.props.tracks.map( track => {
                        return (
                            <Track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove}></Track>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default Tracklist;
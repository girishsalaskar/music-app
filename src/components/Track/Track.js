import React, { Component } from "react";
import './Track.css';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track:{}
        }
    }
    
    addTrack = () => {
        this.props.onAdd(this.props.track);
    }

    removeTrack = () => {
        this.props.onRemove(this.state.track);
    }

    renderAction = () => {
        if(this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}> - </button>
        }
        return <button className="Track-action" onClick={this.addTrack}> + </button>;
    }

    render() { 
        return ( <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
                <iframe 
                    src={ "https://open.spotify.com/embed/track" + this.props.track.id }
                    frameborder="0"
                    width="300"
                    height="80"
                    allowtransperency="true"
                    allow="encrypted-media"
                    title="preview">

                </iframe>
            </div>
            {this.renderAction()}
        </div> );
    }
}
 
export default Track;
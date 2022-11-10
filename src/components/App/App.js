import React, { Component } from 'react';
import './App.css';
import Searchbar from '../searchbar/Searchbar';
import Searchresult from '../searchresult/Searchresult';
import Playlist from '../playlist/Playlist';

class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      searchResults: [],
      playListName: 'New Playlist',
      playlistTracks: []
    }
  }

  search = (term) => {
    // Spotify.search(term).then( searchResults => {
    //   this.setState({searchResults: searchResults});
    // })
  }

  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    if( !tracks.find( savedTrack => savedTrack.id === track.id ) ) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter( currentTrack => track.id !== currentTrack.id );
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName = (name) => {
    this.setState({playListName: name});
  }

  savePlaylist = () => {
    // const trackUris = this.playlistTracks.map(track => track.uri);
    // Spotify.savePlaylist(this.state.playListName, trackUris).then( () => {
    //   this.setState({playListName: 'New Playlist', playlistTracks: []});
    // });
  }

  removeTrackSearch = (track) => {
    let tracks = this.state.searchResults;
    tracks = tracks.filter( currentTrack => currentTrack.id !== track.id );
    this.setState({searchResults: tracks});
  }

  doThese = (track) => {
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  render() {
    return (
      <div className="App">
        <h1>
          <a href="/">Musicopella</a>
          <Searchbar onSearch={this.search}></Searchbar>
          <div className='App-playlist'>
            <Searchresult searchResult={this.state.searchResults} onAdd={this.doThese}></Searchresult>
            <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onRemoveTrack={this.removeTrack} onSave={this.savePlaylist} ></Playlist>
          </div>
        </h1>
      </div>
    );
  }
}

export default App;

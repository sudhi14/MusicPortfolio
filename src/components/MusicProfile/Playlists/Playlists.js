import React, {Component} from 'react'
import {Row} from 'react-bootstrap'
// import ApiData from '../../../DataProvider/GetData/GetData'
// import styles from './Playlist.module.css'
import  {playlist as Playlist} from './Playlist/Playlist'
import {playlistModal as PlaylistModal} from './Playlist/Playlist'
import LoadSpinner from '../LoadSpinner/LoadSpinner'


class Playlists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
            modalState : false,
             currentVideo : ''

        }
    }

    toggleModal () {
        this.setState({
            modalState : !this.state.modalState
        });
    }

        getCurrentVideo(e) {
            this.setState({
                currentVideo : this.props.youtubeData.items[e.target.id],
            })
            this.toggleModal();
        }

  
        videoItems () {
            return this.props.youtubeData.items ? this.props.youtubeData.items.map((curr,index) => {
                if(curr.id.videoId) {
                    return (<Playlist 
                                key = {index} 
                                getCurrentVideo = {(e) => this.getCurrentVideo(e)} 
                                index = {index} 
                                curr = {curr} />);
                }
                else { return ''}
             
                }) : ''
        }   
        
        render() {
            
         return ( 
            <Row style = {{paddingTop:"200px",paddingLeft : "100px"}} >
                {this.props.youtubeData.items ? this.videoItems() : <LoadSpinner/>}
                <PlaylistModal 
                    currentVideo = {this.state.currentVideo} 
                    currentElement = {this.state.currentElement}
                    modalState = {this.state.modalState} 
                    toggleModal = {this.toggleModal.bind(this)} // figure out the error
                />    
            </Row>
           );
        }

}

export default Playlists;



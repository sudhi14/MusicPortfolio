import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
// import ApiData from '../../../DataProvider/GetData/GetData'
// import styles from './Playlist.module.css'
import  Playlist from './Playlist/Playlist';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import styles from './Playlists.module.css';
import MyContext from '../../ContextApi/ContextApi';


class Playlists extends Component {

    constructor(props) {
        super(props);
        Playlists.contextType = MyContext;
    }

     

        componentDidMount() {
             document.addEventListener("keydown",(e)=> {
                return e.keyCode === 27 && this.state.modalState ? this.toggleModal() : ''
                },false)              
        }

  
        videoItems (contextVideo) {
            return (
                contextVideo.data ? contextVideo.data.items.map((curr,index) => {
                    if(curr.id.videoId) {
                            return (<Playlist 
                                key = {`Image${index}`}
                                src = {curr.snippet.thumbnails.high.url} 
                                index = {index} 
                                youtubeId = {curr.id.videoId} />
                            );
                        }
                        else { return ''}
    
                }) : ''    
            );
        }   
        
        render() {
            
         return ( 
            <Row id = 'playlist' className = {styles.playlists} >
                {this.videoItems(this.context)}  
            </Row>
           );
        }

}

export default Playlists;



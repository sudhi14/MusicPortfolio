import React, {Component} from 'react';
import {Container } from 'react-bootstrap';
import Gallery from './Gallery/Gallery'
import Playlist from './Playlist/Playlist'
import Contact from './Contact/Contact'
import styles from './MusicProfile.module.css'
//import image from '../../assets/Social/bgImage.jpeg'
//import HOC from '../HOC/HOC.js'


class MusicProfile extends Component {
    

    render() {            

        return (
            <Container fluid className = {styles.bgImage} >
               <div>
                <Gallery />
                <Playlist />
                <Contact />
                </div>
            </Container>
        );
    }
}

export default MusicProfile;
import React, {Component} from 'react';
import {Container } from 'react-bootstrap';
import Gallery from './Gallery/Gallery';
import Playlists from './Playlists/Playlists';
import Contact from './Contact/Contact';
import styles from './MusicProfile.module.css';
import getApi from '../../DataProvider/GetData/GetData';
//import image from '../../assets/Social/bgImage.jpeg'
//import HOC from '../HOC/HOC.js'


class MusicProfile extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            youtubeData : ''
        }
    }

    async componentDidMount() {
        const jsonData = await getApi();
        this.setState({
            youtubeData : jsonData
        })
    }

    render() {            

        return (
            <Container fluid className = {styles.bgImage}>
                <Gallery youtubeData = {this.state.youtubeData ? this.state.youtubeData : "Waiting for Data"}/>
                <Playlists youtubeData = {this.state.youtubeData ? this.state.youtubeData : "Waiting for Data"} />
                <Contact />
            </Container>
        );
    }
}

export default MusicProfile;
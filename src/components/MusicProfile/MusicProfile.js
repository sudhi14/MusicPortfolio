import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import NavigationBar from './NavigationBar/NavigationBar'
import Gallery from './Gallery/Gallery';
import Playlists from './Playlists/Playlists';
import Contact from './Contact/Contact';
import styles from './MusicProfile.module.css';
import getApi from '../../DataProvider/GetData/GetData';
import MyContext from '../ContextApi/ContextApi';
import IntroHome from './IntroHome/IntroHome';
//import image from '../../assets/Social/bgImage.jpeg'
//import HOC from '../HOC/HOC.js'


class MusicProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            youtubeData : ''
        }
    }

    async componentDidMount() {
        console.log("I am called : Music Profile (componentDidMount::)")
        const jsonData = await getApi();
        this.setState({
            youtubeData : jsonData
        })
    }

    render() {
        return (
                <div className = {styles.bgImage}> 
                    <NavigationBar />
                    <Row>
                        <IntroHome name = {this.state.name} count = {this.state.count} />
                    </Row>     
                    <Row className = {styles.secRow}>
                        <MyContext.Provider value = {this.state.youtubeData ? {data:this.state.youtubeData} : ''}>
                            <Col xs = {0} >
                                <Gallery/>
                            </Col>
                            <Col xs = {0}>                           
                                <Playlists />    
                            </Col>
                        </MyContext.Provider>
                        {/* <Contact /> */}
                    </Row>
                </div>
        );
    }
}

export default MusicProfile;
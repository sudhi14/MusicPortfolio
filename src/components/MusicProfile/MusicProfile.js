import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import NavigationBar from './NavigationBar/NavigationBar'
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
            youtubeData : '',
            name : ['Music Producer','Rap Artist','Sound Engineer'],
            count : 0
        }
        this.animation();
    }

    async componentDidMount() {
        const jsonData = await getApi();
        this.setState({
            youtubeData : jsonData
        })
    }

    animation() {
        let counter = 0;
        console.log("Start",this.state.name.length);
        setInterval(() => {
            
            if(counter < this.state.name.length-1) {
                this.setState({
                    count : ++counter})
            }
            else {
                this.setState({
                    count : 0 })
                    counter = 0;
            }
            
        }, 3000);
    }

    render() {            

        return (
                <div className = {styles.bgImage}> 
                    <NavigationBar />
                    <Row>
                    <Col xs = {4} className = {styles.Heading}>
                    <span className = {styles.line}>
                        </span>
                        <span className = {styles.intro}>
                            M.U.S.I.C
                        </span>
                        <span className = {styles.s1}>
                            Emcee
                        </span>
                        <span className = {[styles.s1,styles.s2].join(" ")}>
                            Deep
                        </span>
                        <span className = {styles.title}>
                            {this.state.name[this.state.count]}
                        </span>
                    </Col>    
                    <Col xs = {4} className = {styles.Heading2}>
                        <span>
                            "I ma 90's kid..Bring it up man!"
                        </span>
                    </Col> 
                    <Col xs = {4} className = {styles.Heading2}>
                        <span className = {styles.s3}>
                            "Yo,I rise again like I wish it" - Emcee Deep  
                        </span>
                    </Col> 
                    </Row>     
                    <Row className = {styles.secRow}>
                        
                        <Gallery youtubeData = {this.state.youtubeData ? this.state.youtubeData : ""}/>
                        <Col xs = {0}>
                            <Playlists youtubeData = {this.state.youtubeData ? this.state.youtubeData : ""} />
                        </Col>
                        {/* <Contact /> */}
                    </Row>
                </div>
        );
    }
}

export default MusicProfile;
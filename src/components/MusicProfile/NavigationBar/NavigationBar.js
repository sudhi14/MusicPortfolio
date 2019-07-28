import React from 'react';
import {Row, Col,Button} from 'react-bootstrap';
import styles from './NavigationBar.module.css';
import logo from '../../../assets/Social/Logo.png'
import soundCloudLogo from '../../../assets/Social/001-soundcloud.png'
import faceBookLogo from '../../../assets/Social/002-facebook.png'
import instagram from '../../../assets/Social/003-instagram.png'
const navigationBar = (props) => {

    return(  
        <Row className = {styles.Nav}>
            <Row className = {styles.socialImgDiv}>
                <Col xs = {6}>
                    
                </Col>
                {/* <div className = {styles.socialImgDiv}> */}
                <Col md = {6} xs = {3} sm = {3}  className = {styles.imgCol}>
                <div>
                    <input type= "email" placeholder = "Email" className = {styles.text}/>
                    <Button className = {styles.Button}>Subscribe</Button>
                </div>
                <div>
                    <a href = "https://www.instagram.com/emcee_deep" target = "_blank" rel="noopener noreferrer">
                        <img src = {instagram} alt={instagram} className = {styles.socialImg} ></img>
                    </a>
                </div>

                <div>
                    <a href = "https://www.facebook.com/sudheep.shady" target = "_blank" rel="noopener noreferrer">
                        <img src = {faceBookLogo} alt={faceBookLogo} className = {styles.socialImg}></img>
                    </a>
                </div>

                <div>
                    <a href = "https://soundcloud.com/sudheep-shady" target = "_blank" rel="noopener noreferrer">
                        <img src = {soundCloudLogo} alt={soundCloudLogo} className = {styles.socialImg} style = {{borderRadius: '50%', border:'2px dark brown solid'}}></img>
                    </a>
                </div>
                </Col>
                {/* </div> */}
            </Row>


            <Row>
                <Col xs = {3}>
                    <div className = {styles.Logo}>
                        <img src = {logo} alt = "logo"/>
                    </div>
                </Col>
                <Col xs = {9}>
                    <nav className = {[styles.List].join(" ")}>
                        <div>
                            <ul>
                                <li><a href = '#'>Home</a></li>
                                <li><a href = '#'>Playlist</a></li>
                                <li><a href = '#'>Blog</a></li>
                                <li><a href = '#'>About Me</a></li>
                            </ul>
                        </div>
                    </nav>
                </Col>
            </Row>
        </Row>
    );
}

export default navigationBar;

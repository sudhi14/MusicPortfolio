import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import styles from './Gallery.module.css';
import oldschoolImage from '../../../assets/Social/OldSchool3.jpg'
import oldschoolImageCover from '../../../assets/Social/Cover4.jpg'


class Gallery extends Component {

    getAllImages = (() => {
    let req = require.context("../../../assets", false, /.*\.*$/);
    return req.keys().map(function(key){
        return req(key)
        });
    })

    constructor() {
        super();
        this.state = {
            allImages : this.getAllImages(),
            currImage : 0,
            transClass : 'fadeIn'

        }
    }

    //Change image
    changeImage = (e) => {
       
        if(this.state.currImage > this.state.allImages.length -2) {
                this.setState({
                    transClass : 'fadeIn',
                    currImage : 0
                })
            }
            else {
                const newImageIndex = this.state.currImage + 1;
                this.setState({
                    transClass : 'fadeIn',
                    currImage : newImageIndex
                    
                })
            }
    }
        
        //const toggle = this.state.transClass

    // auto image change
    componentDidMount() {
        setInterval(() => {
            this.setState({
                transClass : 'fadeOut'
            },
            () => {
                //set time out 
                setTimeout(() => this.changeImage(),2000);
            })
        }, 4000);
    }

    render() {
        
        return (
            <Row style = {{paddingTop:"100px",paddingBottom:"100px"}}>
            
                <Col xs ={0} style = {{height:"800px"}}>
                    <div ></div>
                </Col>
            
                <Col xs ={0} style ={{width:"100%"}}>
                    <div style = {{width : "100%", zIndex:"-1", backgroundBlendMode: "multiply" ,backgroundImage : `url(${oldschoolImage})` , backgroundSize:"contain",opacity:0.9,border:"solid 3px black"}}>
                        <iframe  alignContent = "center" style = {{ borderRadius : "1%",marginLeft: "25%", border:"solid 4px black" }}
                            width="800" height="500" 
                            src="https://www.youtube.com/embed/AQoJTkG3pLg?autoplay=0" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe> 
                    </div>
                </Col>

                <Col xs ={0} style={{height:"100px",width:"100%", textAlign:"center" ,color : "white",fontWeight:"bold",fontSize : "50px"}}>
                    <p textAlign = "center" style = {{textShadow:"3px 3px black"}} >"AINT NOTHING LIKE OLD SCHOOL"</p>
                </Col>
            
                <Col xs = {0} style = {{width : "100%", border:"solid 2px white"}}>
                    <div id = "imageCarousal" onClick = {this.changeImage}  style = {{width : "100%",backgroundImage:`url(${oldschoolImageCover})`,zIndex:"-1"}} >
                        <img id = {this.state.currImage} 
                            src = {(this.state.allImages[this.state.currImage])}
                            className = {[this.state.transClass === 'fadeIn' ? styles.fadeIn : styles.fadeOut, styles.imageDimension].join(" ")}
                            alt = "First"
                        ></img>
                    
                    </div>
                </Col>

            </Row>
        );
    }

}

export default Gallery;


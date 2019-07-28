import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import styles from './Carousal.module.css';


class Carousal extends Component  {
    
    render() {
        return (
            <Row style = {{border:"solid 2px white"}}>
                <div id = "imageCarousal" onClick = {this.props.changeImage}  style = {{width:'100%'}} >
                {/* <div id = "imageCarousal" onClick = {this.changeImage}  style = {{width : "100%",backgroundImage:`url(${oldschoolImageCover})`,zIndex:"-1"}} > */}
                    <img id = {this.props.currImage} 
                        src = {(this.props.allImages[this.props.currImage])}
                        className = {[this.props.transClass === 'fadeIn' ? styles.fadeIn : styles.fadeOut, styles.imageDimension].join(" ")}
                        alt = "First"
                    ></img>
                </div>
            </Row>
        );
    }
}

export default Carousal;
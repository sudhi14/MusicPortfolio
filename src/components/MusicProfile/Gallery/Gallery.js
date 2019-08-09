import React, {Component} from 'react';
import Carousal from '../Carousal/Carousal';
import {Row} from 'react-bootstrap';
import LatestVideoPanel from '../LatestVideoPanel/LatestVideoPanel';
import HOC from '../../HOC/HOC';
import styles from './Gallery.module.css';


class Gallery extends Component {

    constructor(props) {
        super(props);
    }   

    render() {
    
            return (
        
                <HOC>
                    <div style = {{background : 'rgb(255, 210, 142)'}}>
                    <LatestVideoPanel youtubeData = {this.props.youtubeData}/>
                    <div className={styles.galleryFontStyle}><span>"Pac was like Jesus Nas wrote the bible"</span></div>
                    <Carousal />
                    </div>
                </HOC>
            );
  
    }
}

export default Gallery;


/*-------------------------------------------------------------*/


//   //Initialize the state 
//   constructor(props) {
//     super(props);
//     this.state = {
//         allImages : this.getAllImages(),
//         currImage : 0,
//         transClass : 'fadeIn'
//     }
// }

// getAllImages = (() => {
// let req = require.context("../../../assets", false, /.*\.*$/);
// return req.keys().map(function(key){
//     return req(key)
//     });
// })


// //Change image
// changeImage = () => {
   
//     if(this.state.currImage > this.state.allImages.length -2) {
//             this.setState({
//                 transClass : 'fadeIn',
//                 currImage : 0
//             })
//         }
//         else {
//             const newImageIndex = this.state.currImage + 1;
//             this.setState({
//                 transClass : 'fadeIn',
//                 currImage : newImageIndex
                
//             })
//         }
// }
    
//     //const toggle = this.state.transClass

// // auto image change
// componentDidMount() {
//     setInterval(() => {
//         this.setState({
//             transClass : 'fadeOut'
//         },
//         () => {
//             setTimeout(() => this.changeImage(),2000);
//         })
//     }, 4000);
// }


// render() {
    
//     return (

//         <HOC>
//             <LatestVideoPanel youtubeData = {this.props.youtubeData}/>

//             <Carousal 
//                 clicked = {this.changeImage}
//                 allImages = {this.state.allImages}
//                 currImage = {this.state.currImage}
//                 transClass = {this.state.transClass} />
//         </HOC>
//     );
// }

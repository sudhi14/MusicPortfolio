import React, {Component} from 'react';
import Carousal from '../Carousal/Carousal';
import {Row,Col} from 'react-bootstrap';
import LatestVideoPanel from '../LatestVideoPanel/LatestVideoPanel'



class Gallery extends Component {

    //Initialize the state 
    constructor(props) {
        super(props);
        this.state = {
            allImages : this.getAllImages(),
            currImage : 0,
            transClass : 'fadeIn'
        }
    }

    getAllImages = (() => {
    let req = require.context("../../../assets", false, /.*\.*$/);
    return req.keys().map(function(key){
        return req(key)
        });
    })


    //Change image
    changeImage = () => {
       
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
    //     setInterval(() => {
    //         this.setState({
    //             transClass : 'fadeOut'
    //         },
    //         () => {
    //             setTimeout(() => this.changeImage(),2000);
    //         })
    //     }, 4000);
    // }
    }

    render() {
        
        return (

            <Row style = {{width:'100%'}}>

                <LatestVideoPanel youtubeData = {this.props.youtubeData}/>

                <Row style={{color : "white",fontWeight:"bold",fontSize : "50px"}}>
                    <p textalign = "center" style = {{textShadow:"3px 3px black"}} >"AINT NOTHING LIKE OLD SCHOOL"</p>
                </Row>


                <Carousal 
                    clicked = {this.changeImage}
                    allImages = {this.state.allImages}
                    currImage = {this.state.currImage}
                    transClass = {this.state.transClass} />
  

  
            </Row>
        );
    }

}

export default Gallery;


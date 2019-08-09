import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import styles from './Carousal.module.css';


class Carousal extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            slideImage :0
        }
    }

    imageCreater () {
        let imagesReq = require.context("../../../assets", false, /.*\.*$/);
            return imagesReq.keys().map(function(key) {
            return (
                    <img
                        key = {`Images${key}`}
                        id = {`caurosalImage${key}`}
                        src = {imagesReq(key)}
                        alt = {`Images${key}`}
                    ></img>
            );
        });
    }

    componentDidMount() {
        let counter = 0;
        setInterval(() => {
            if(counter < 2) {
                this.setState ({
                    slideImage : -(++counter) * 100
                })
            }
            else {
                counter = 0;
                this.setState({
                    slideImage : 0
                })
            }
        }, 3000);
    }
    
    render() {
        return (
            <Row style = {{width:'100%',margin:'0'}}>
                <div className = {styles.Slider} >
                    <div className = {styles.SliderWrapper} 
                        style = {{
                            transform: `translateX(${this.state.slideImage}%)`,
                            transition: 'transform ease-out 1s'
                        }}
                    >
                        {this.imageCreater()}   
                    </div>
                </div>
            </Row>
        );
    }
}

export default Carousal;
import React , {Component} from 'react';
import {Col} from 'react-bootstrap';
import HOC from '../../HOC/HOC';
import styles from '../MusicProfile.module.css';

class IntroHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : ['Music Producer','Rap Artist','Sound Engineer'],
            count : 0
        }
        this.animation();
    }

    animation() {
        let counter = 0;
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
            
        }, 3500);
    }

    render() {
        return (
            <HOC>
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
            </HOC>
        );
    }
}

export default IntroHome;
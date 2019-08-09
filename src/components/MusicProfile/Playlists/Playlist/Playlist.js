import React, {Component} from 'react';
import {Col,Modal} from 'react-bootstrap';
import styles from './Playlist.module.css';
import closeIcon from '../../../../assets/Social/closeIcon.jpg';
import HOC from '../../../HOC/HOC';
import MyContext from '../../../ContextApi/ContextApi';

class Playlist extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            modalState : false,
            currentVideo: ''
        }
    }


    createFrame (targetId) {
        return(
            <div className = {styles.Overlay}>
                <div className = {styles.CloseOverlay}><img src = {closeIcon} alt = "closeIcon" onClick = {() => this.toggleModal()}></img></div>
                <div>
                    <iframe
                        className = {styles.frames}
                        src = { `https://www.youtube.com/embed/${targetId}?autoplay=1` }
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        );    
    }


    getCurrentVideo (e) {
        let targetId;

        if (e.target.tagName.toLowerCase() === 'img') {
            targetId = e.target.id;
        } 
        else {
            targetId = e.target.previousElementSibling.id;
        }
        this.toggleModal();
        this.setState ({
            currentVideo : this.createFrame(targetId)
        });

    }

    toggleModal () {
        console.log("modal state s called", this.state.modalState);
        this.setState({
            modalState : !this.state.modalState
        });
    }

    render() {
        return (
            <HOC>
                <div className = {styles.thumbnailDiv}>
                    <img 
                        id = {this.props.youtubeId}   
                        src ={this.props.src}
                        onClick = {(e) => this.getCurrentVideo(e)}
                        className = {styles.thumbnailDivImg}
                        alt = {`Img${this.props.index}`} >
                    </img>
                    <div className = {styles.thumbnailDivDiv} onClick = {(e) => this.getCurrentVideo(e)}>
                        Play
                    </div>
                </div>  
                {this.state.modalState ? this.state.currentVideo : '' }  
            </HOC>
        );
    } 
}

export default Playlist;










//---------------------------------------------------------------------------------------

  // <Modal size = "xl" show={props.modalState} onHide = {props.toggleModal}>
            //     <Modal.Header closeButton>
            //         <Modal.Title id = 'example-custom-modal-styling-title'>
            //         {props.modalState ? props.currentVideo.snippet.title :'Modal False'}
            //         </Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            //          {props.modalState ? createFrame() :'Modal False'}
            //     </Modal.Body>
            // </Modal>
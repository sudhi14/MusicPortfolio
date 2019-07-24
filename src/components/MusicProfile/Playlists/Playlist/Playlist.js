import React from 'react';
import {Col,Modal} from 'react-bootstrap';
import styles from './Playlist.module.css'

const playlist = (props) => {
    return (
        <Col xs = {2} className = {styles.VideoSize}>
            <img 
                id = {props.index} 
                className = {styles.VideoSize} 
                style = {{border : "solid 3px white" , borderRadius : "5%", opacity:0.9}} 
                src ={props.curr.snippet.thumbnails.high.url}
                onClick = {props.getCurrentVideo}
                alt = {`Img${props.index}`} >
            </img>
        </Col>
    );
}

const playlistModal = (props) => {
    
    const createFrame = () => {
            return (<iframe
                title={props.currentVideo.snippet.title}
                width="100%" height="550px;"
                src = { `https://www.youtube.com/embed/${props.currentVideo.id.videoId}?autoplay=1` }
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe> );
    }

    return (
        <Modal size = "xl" show={props.modalState} onHide = {props.toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title id = 'example-custom-modal-styling-title'>
                {props.modalState ? props.currentVideo.snippet.title :'Modal False'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 {props.modalState ? createFrame() :'Modal False'}
            </Modal.Body>
        </Modal>
    );
}

export  {playlist,  playlistModal};
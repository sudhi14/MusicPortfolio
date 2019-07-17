import React, {Component} from 'react'
import {Row, Col,Modal} from 'react-bootstrap'
// import ApiData from '../../../DataProvider/GetData/GetData'
import styles from './Playlist.module.css'
import getApi from '../../../DataProvider/GetData/GetData';

class Playlist extends Component {

    constructor() {
        super();
        this.state = {
            data : {},
            modalState : false,
            currentIframe : '',
            currentVideo : ''
        }
    }

          async componentDidMount() {
            //  fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDMSc-Xi3xn7BQaDBEmy2gDNH_9XEc2eDw&channelId=UCSDmYNQ_kSGMp6sGbdA-BjQ&part=snippet,id&order=date&maxResults=20') 
            //     .then(response => response.json())
            //     .then((myjson) => {
            //         this.setState({ 
            //             data : myjson
            //         })
            //     })
            const jsonData = await getApi();
            this.setState({
                data : jsonData
            }) 
            
        }

        modalToggle = () => {
            this.setState({
                modalState : !this.state.modalState,
            });
        }

         createFrame = ((e) => {
            let video 
            if(e) {
                 video = <iframe onClick = {this.changeSize}
                    title={`${this.state.data.items[parseInt(e.target.id)].snippet.title}`}
                    width="100%" height="550px;"
                    src = { `https://www.youtube.com/embed/${this.state.data.items[parseInt(e.target.id)].id.videoId}?autoplay=1` }
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe> 
             }   

             this.setState({
                currentVideo : video,
                currentIframe : this.state.data.items[parseInt(e.target.id)].snippet.title
            })
            this.modalToggle()
       })

        
        render() {
            const videoItems  = this.state.data.items ? this.state.data.items.map((curr,index) => {
                    if(curr.id.videoId) {
                        return  <Col key = {index} xs = {2} className = {styles.VideoSize}>
                        {<img 
                            id = {index} 
                            className = {styles.VideoSize} 
                            style = {{border : "solid 3px white" , borderRadius : "5%", opacity:0.9}} 
                            src ={curr.snippet.thumbnails.high.url}
                            onClick = {this.createFrame}
                            alt = {`Img${index}`} >
                        </img>}
                    </Col>
                    }
                    else { return ''}
                 
            }) : ''
            
         return (
            <Row style = {{paddingTop:"200px",paddingLeft : "100px"}} >
                {videoItems}
                <Modal size = "xl"
                    show={this.state.modalState} onHide = {this.modalToggle} >
                    <Modal.Header closeButton>
                        <Modal.Title id = 'example-custom-modal-styling-title'>{this.state.currentIframe}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.currentVideo}
                    </Modal.Body>
                </Modal>
               </Row>
           );
        }

}

export default Playlist;



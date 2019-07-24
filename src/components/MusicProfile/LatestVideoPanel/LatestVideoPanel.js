import React from 'react'
import {Col} from 'react-bootstrap'
import oldschoolImage from '../../../assets/Social/OldSchool3.jpg'

const latestVideoPanel = props => {
    let latestVideo = '';

    const getLatestVideo = () => {
        return props.youtubeData.items[0].id.videoId;
    }

    if(props.youtubeData.items) {
        return (
            <Col xs ={0} style ={{width:"100%"}}>
            <div style = {{width : "100%", zIndex:"-1", backgroundBlendMode: "multiply" ,backgroundImage : `url(${oldschoolImage})` , backgroundSize:"contain",opacity:0.9,border:"solid 3px black"}}>
                <iframe  aligncontent = "center" style = {{ borderRadius : "1%",marginLeft: "25%", border:"solid 4px black" }}
                    width="800" height="500" 
                    title = "Old School"
                    src ={`https://www.youtube.com/embed/${getLatestVideo()}?autoplay=0`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe> 
            </div>
        </Col>
        );
    }
    return <p>Fetching Video</p>;

}

export default latestVideoPanel;
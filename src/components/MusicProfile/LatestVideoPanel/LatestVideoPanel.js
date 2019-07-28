import React from 'react';
import {Row} from 'react-bootstrap';
import styles from './LatestVideoPanel.module.css';

const latestVideoPanel = props => {

    const getLatestVideo = () => {
        return props.youtubeData.items[0].id.videoId;
    }
    // if(props.youtubeData.items) {
        return (
            <div className = {styles.LatestVideoPanel}>
                <div className={styles.videoContainer}>
                <iframe
                    title = "Old School"
                    // src ={`https://www.youtube.com/embed/${getLatestVideo()}?autoplay=0`}
                    src ={"https://www.youtube.com/embed/AQoJTkG3pLg"}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                 </div>
            </div>


        );
    // }
    // console.log("failed to fetch the latest video")
    // return "";

}

export default latestVideoPanel;
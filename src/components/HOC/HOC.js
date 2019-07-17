import image from '../../assets/Social/bgImage.jpeg'
import styles from './HOC.module.css';
import React , {Component} from 'react'

class HOC extends Component {
    render() {
        return (
            <div className = {styles.bgImage}>
            </div>
        );
    }
}

export default HOC;
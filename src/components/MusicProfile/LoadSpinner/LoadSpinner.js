import React from 'react'
import LoadSpinner from '../../../assets/Social/spinner.gif'
import styles from './LoadSpinner.module.css'

const loadSpinner = () => {
    return (
        <div className = {styles.LoadSpinner}> 
            <img src={LoadSpinner} alt="LoadSpinner"/>    
        </div>
    );
}

export default loadSpinner;
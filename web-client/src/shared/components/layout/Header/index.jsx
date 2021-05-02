import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.scss'

const Header = ({headline})=>{
    return (
        <div className={styles.header}>
            <Typography variant="h4">{headline}</Typography>
            <div className={styles.profile} >
                <img src="#" alt=""/>
                <Typography>Profile</Typography>
            </div>
        </div>
    )
}

export default Header
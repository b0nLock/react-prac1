import React from 'react'
import classes from './TheButton.module.css'

const TheButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.thebtn}>
        {children}
    </button>
  )
}

export default TheButton
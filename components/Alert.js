import React from 'react'

const Alert = ({ type, message }) => {
  return <div className={type}>{message}</div>
}

export default Alert

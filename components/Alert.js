import React from 'react'

const Alert = ({ type, children }) => {
  if (type) {
    return (
      <div className="flex flex-col justify-start border border-amber-900 bg-amber-100 text-amber-600">
        <div className="bg-amber-600">Alerta</div>
        <div className="mx-8">{children}</div>
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-start border border-blue-900 bg-blue-100 text-blue-600">
      <div className="bg-blue-600">Info</div>
      <div className="mx-8">{children}</div>
    </div>
  )
}

export default Alert

import React from 'react'
import Progress from './Progress'

const Brand = ({ title, url, progress, children }) => {
  return (
    <div className="card-wrapper mx-8 flex flex-col items-center rounded p-4">
      <div>
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          children
        )}
      </div>
      <div className="py-2">{title}</div>
      {progress && <Progress value={progress} />}
    </div>
  )
}

export default Brand

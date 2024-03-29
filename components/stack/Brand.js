import React from 'react'
import Progress from './Progress'

const Brand = ({ title, url, progress, children }) => {
  return (
    <div className="card-wrapper m-4 flex min-w-[120px] flex-col items-center rounded-xl p-4">
      <div>
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          children
        )}
      </div>
      <div className="py-1">{title}</div>
      {progress && <Progress value={progress} />}
    </div>
  )
}

export default Brand

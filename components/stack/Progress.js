import React from 'react'

const Progress = ({ value }) => {
  return (
    <div>
      <div className="h-2.5 w-20 rounded-full bg-slate-300 dark:bg-slate-700">
        <div className="linear-green h-2.5 rounded-full" style={{ width: value + '%' }}></div>
      </div>
    </div>
  )
}

export default Progress

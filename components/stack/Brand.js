import React from 'react';
import Progress from './Progress';

const Brand = ({title, url, progress, children}) => {
    return (
        <div className='flex flex-col items-center mx-8'>
            <div>
            {url ? (
                <a href={url} target="_blank">
                    {children}
                </a> ) : (children)    
            }
            </div>
            <div className='py-2'>{title}</div>
            {progress && <Progress value={progress} />}
        </div>
    );
};

export default Brand;
import React from 'react';

const Progress = ({ value }) => {
    return (
        <div>
            <div className="w-20 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="linear-green h-2.5 rounded-full" style={{width: value + "%"}}></div>
            </div>
        </div>
    );
};

export default Progress;
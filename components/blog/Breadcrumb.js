import { Children } from 'react';

const Breadcrumb = ({ children }) => {
    const childrenArray = Children.toArray(children)
    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <div key={index}>
                    {child}
                    <span>/</span>
                </div>
            );
        }
        return child
    });
    return (
        <nav>
            <ol>{childrenWtihSeperator}</ol>
        </nav>
    );
};

export default Breadcrumb;s
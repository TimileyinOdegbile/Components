import React from 'react';

const ContentContainer = (props) => {
    console.log(props.children);
    return (
        <div className='ui placeholder segment'>
            {props.children}
        </div>
    );
}

export default ContentContainer;
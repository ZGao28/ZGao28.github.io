import React from 'react';

const RightSider = (props) => (
    <div className='RightSider'>
        {props.pageState.toUpperCase()}
    </div>
);

export default RightSider;
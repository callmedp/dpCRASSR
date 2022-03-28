import React, { useEffect } from 'react';

const NotFound = (props) => {
    console.log("Not found props", props)
    
    const { staticContext } = props;
    const status = 404

    if (staticContext) staticContext.status = status;

    return (
        <div>
            Not Found
        </div>
    )
}

export default NotFound;
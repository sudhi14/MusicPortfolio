import React from 'react';

const HOC = (props) => {
    return props.children;
}

export default HOC;

// import React from 'react';

// const JQ = (props) => {
//     const $ = require('Jquery');
//     return (
//         props.children($);
//         <div>This is programmer</div>
//     );
// }

// export default HOC; 



// <JQ>
//     <APP />
// </JQ>
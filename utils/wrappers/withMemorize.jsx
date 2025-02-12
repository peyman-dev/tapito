import React from 'react';

const withMemorize = (Component) => {
    return React.memo(Component);
};

export default withMemorize;
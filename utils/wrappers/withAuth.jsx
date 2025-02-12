"use client"
import React from 'react';
import useMe from '../../core/hooks/use-me';

const withAuth = (Component) => {
    return (props) => {
        const me = useMe();
        console.log('me:', me);
        return <Component {...props} />;
    };
};


export default withAuth;

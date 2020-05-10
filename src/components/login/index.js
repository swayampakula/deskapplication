import React, { useEffect, Fragment } from 'react';
import { routeConfig } from '../../config/routeConfig';

export const Login = (props) => {
    useEffect(()=> {

    },[])

    const onSampleClick = () => {
        console.log('I am going');
        props.history.replace(routeConfig.dashboard);
    }

    return (
        <Fragment>
            <p>Welcome to Login</p>
            <button onClick={onSampleClick}>sample button</button>
        </Fragment>
    )    
}
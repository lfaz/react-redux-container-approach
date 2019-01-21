import React from 'react';
import './loading.style.scss';

const LoadingBar = (props) => {
    const {loading} = props;
    return (
        <div className="LoadingBar">
            {
                loading === true ?
                    <div className="LoadingBarComponent">LoadingBar showing </div> :
                    ''
            }
        </div>
    )
};

export default LoadingBar

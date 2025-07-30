import React from 'react';
import './Banner.css';

const Banner = ({ title, children }) => {
    return (
        <div className="custom-banner">
            <div className="banner-content">
                <div className="banner-title-wrapper">
                    <div className="banner-title">
                        <h1>{title}</h1>
                        <div className="banner-divider"></div>
                    </div>
                </div>
                {children && <div className="banner-text">{children}</div>}
            </div>
        </div>
    );
};

export default Banner;
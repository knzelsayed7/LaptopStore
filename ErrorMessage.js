import React from 'react';

const ErrorMessage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <h2>An error occurred while fetching data. Please try again later.</h2>
        </div>
    );
};

export default ErrorMessage;
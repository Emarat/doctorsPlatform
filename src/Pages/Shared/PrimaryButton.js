import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button class="btn btn-primary uppercase text-white">{children}</button>
    );
};

export default PrimaryButton;
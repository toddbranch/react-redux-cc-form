import React from 'react';

const TextBox = ({value, error, errorMessage, changeCallback, blurCallback, maxLength}) => {
    let renderError = () => {
        if (!error) {
            return null;
        }

        return <div className="error">{errorMessage}</div>;
    };

    let onChange = (e) => {
        changeCallback(e.target.value);
    };

    let onBlur = () => {
        blurCallback();
    };

    return (
        <div>
            <input {...{value, onChange, onBlur, maxLength}} />
            {renderError()}
        </div>
    );
};

module.exports = TextBox;

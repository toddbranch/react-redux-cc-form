import React from 'react';

const TextBox = ({value, error, errorMessage, changeCallback, blurCallback}) => {
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
            <input value={value} onChange={onChange} onBlur={onBlur} />
            {renderError()}
        </div>
    );
};

module.exports = TextBox;

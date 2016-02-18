import React from 'react';

const CvcBox = ({value, changeValue, error, markDirty}) => {
    let renderError = () => {
        if (!error) {
            return null;
        }

        return <div>Error!</div>;
    };

    let onChange = (e) => {
        changeValue(e.target.value);
    };

    return (
        <div>
            <input value={value} onChange={onChange} onBlur={markDirty} />
            {renderError()}
        </div>
    );
};

module.exports = CvcBox;

import React from 'react';
import TextBox from './text_box.react';

var Form = ({cvcProps, cvcActions, cardNumberProps, cardNumberActions}) => {
    return (
        <div>
            <TextBox
                {...cvcProps}
                {...cvcActions}
                errorMessage="Please enter a valid CVC code."
                maxLength="4"
            />
            <TextBox
                {...cardNumberProps}
                {...cardNumberActions}
                errorMessage="Please enter a valid card number."
            />
        </div>
    );
};

module.exports = Form;

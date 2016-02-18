import React from 'react';
import CvcBox from './cvc_box.react';
import CardNumberBox from './card_number_box.react';

var Form = ({cvcProps, cvcActions, cardNumberProps, cardNumberActions}) => {
    console.log(cvcProps, cvcActions, cardNumberProps, cardNumberActions);
    return (
        <div>
            <CvcBox {...cvcProps} {...cvcActions}/>
            <CardNumberBox {...cardNumberProps} {...cardNumberActions}/>
        </div>
    );
};

module.exports = Form;

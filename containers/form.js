import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from '../components/form.react';

let mapStateToProps = ({cvc, cardNumber}) => {
    return {
        cvcProps: cvc,
        cardNumberProps: cardNumber
    };
};

var cvcActions = {
    changeValue: function(text) {
        return {
            type: 'CHANGE_CVC',
            value: text
        };
    },
    markDirty: function() {
        return {
            type: 'MARK_CVC_DIRTY'
        };
    }
};

var cardNumberActions = {
    changeValue: function(text) {
        return {
            type: 'CHANGE_CARD_NUMBER',
            value: text
        };
    },
    markDirty: function() {
        return {
            type: 'MARK_CARD_NUMBER_DIRTY'
        };
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        cvcActions: bindActionCreators(cvcActions, dispatch),
        cardNumberActions: bindActionCreators(cardNumberActions, dispatch)
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Form);

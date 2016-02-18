const CHANGE_CARD_NUMBER = 'CHANGE_CARD_NUMBER';
const MARK_CARD_NUMBER_DIRTY = 'MARK_CARD_NUMBER_DIRTY';

var defaultState = {
    value: null,
    dirty: false,
    error: false
};

let isValid = (value) => {
    return Stripe.card.validateCardNumber(value);
};

const reducer = (state = defaultState, {type, value}) => {
    switch (type) {
        case CHANGE_CARD_NUMBER:
            let error = state.dirty ? !isValid(value) : false;

            return {
                value: value,
                dirty: state.dirty,
                error: error
            };
        case MARK_CARD_NUMBER_DIRTY:
            return {
                value: state.value,
                dirty: true,
                error: !isValid(state.value)
            };
        default:
            return state
    }
};

module.exports = reducer;

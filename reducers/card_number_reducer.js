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

const getError = (value, dirty) => {
    if (!dirty) {
        return null;
    }

    return !isValid(value);
};

const reducer = (state = defaultState, {type, value}) => {
    switch (type) {
        case CHANGE_CARD_NUMBER:
            return {
                value: value,
                dirty: state.dirty,
                error: getError(value, state.dirty)
            };
        case MARK_CARD_NUMBER_DIRTY:
            return {
                value: state.value,
                dirty: true,
                error: getError(state.value, true)
            };
        default:
            return state
    }
};

module.exports = reducer;

const CHANGE_CVC = 'CHANGE_CVC';
const MARK_CVC_DIRTY = 'MARK_CVC_DIRTY';

var defaultState = {
    value: null,
    dirty: false,
    error: false
};

let isValid = (value) => {
    return Stripe.card.validateCVC(value);
};

const getError = (value, dirty) => {
    if (!dirty) {
        return null;
    }

    return !isValid(value);
};

const reducer = (state = defaultState, {type, value}) => {
    switch (type) {
        case CHANGE_CVC:
            return {
                value: value,
                dirty: state.dirty,
                error: getError(value, state.dirty)
            };
        case MARK_CVC_DIRTY:
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

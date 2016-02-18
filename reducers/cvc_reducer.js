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

const reducer = (state = defaultState, {type, value}) => {
    switch (type) {
        case CHANGE_CVC:
            let error = state.dirty ? !isValid(value) : false;

            return {
                value: value,
                dirty: state.dirty,
                error: error
            };
        case MARK_CVC_DIRTY:
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

var IBAN = require('iban');

export function bankDetails(state = [], action) {
    switch(action.type) {
        case 'BANK_FIELD_CHANGED':
           return [
               ...state.slice(0, action.id),
               {...state[action.id], [action.field]: {value: action.value.trim(), isValid:validateInput(action.field, action.value.trim())}},
               ...state.slice(action.id+1)
           ];
        case 'REMOVE_BANK_FIELD':
            return [
                ...state.slice(0,action.id),
                ...state.slice(action.id + 1)
            ];
        case 'ADD_BANK_FIELD':
            return [
                ...state,
                {
                    name: {
                        value: '',
                        isValid: true
                    },
                    iabn: {
                        value: '',
                        isValid: true
                    }
                }
            ];
        default:
            return state;
    }
}

function validateInput(type, value) {
    // debugger;
    switch(type) {
        case 'name':
            if (value !== undefined && value !== null && value !== '') {
               return true;
            } 
            else return false;
        case 'iabn':
            return IBAN.isValid(value);
        default:
            return true;
    }
}
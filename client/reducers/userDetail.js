export function userDetails(state = {}, action) {
    // debugger;
    switch(action.type) {
        case 'FIELD_CHANGED':
            return {...state, [action.field]: {value: action.value.trim(), isValid: validateInput(action.field, action.value.trim())} }
        default:
            return state;   
    }
}

function validateInput(type, value) {
    switch(type) {
        case 'firstName' :
        case 'lastName' :
            if (value !== undefined && value !== null && value !== '') {
                if(!value.match(/^[a-zA-Z]+$/)) return false;
                else return true;
            } 
            else return false;
        case 'email' :
            if (value !== undefined && value !== null && value !== '') {
                let lastAtPos = value.lastIndexOf('@');
                let lastDotPos = value.lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') == -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2)) {
                    return false;
                } 
                else return true
            } 
            else return false;
        default:
            return true
    }
}
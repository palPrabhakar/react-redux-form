export function fieldChange(field, value) {
    return {
        type: 'FIELD_CHANGED',
        field,
        value
    }
}

export function updateBankDetail(field, value, id) {
    return {
        type: 'BANK_FIELD_CHANGED',
        field,
        value,
        id
    }
}

export function addBankField() {
    return {
        type: 'ADD_BANK_FIELD'
    }
}

export function removeBankField(id) {
    return {
        type: 'REMOVE_BANK_FIELD',
        id
    }
}
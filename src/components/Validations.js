export const validateAdd = ( values ) => {
    const errorsAdd = {}
    if( !values.name ){
        errorsAdd.name = 'Required';
    }else if( values.name.length < 3 ){
        errorsAdd.name = 'Name need more than 2 characters'
    }
    if( !values.lastName ){
        errorsAdd.lastName = 'Required';
    }else if( values.lastName.length < 3){
        errorsAdd.lastName = 'LastName need more than 2 characters'
    }
    if( !values.email ){
        errorsAdd.email = 'Required';
    }
    return errorsAdd;
}

export const validateDel = ( values ) => {
    const errorsDel = {}
    if( !values.id ){
        errorsDel.id = 'Required';
    }
    return errorsDel;
}
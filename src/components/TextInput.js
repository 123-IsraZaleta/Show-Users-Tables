import React from 'react';
import { useField } from 'formik';


export const TextInput = ({ label, ...props }) => {

    const [ field, meta ] = useField( props );
    return (
        <div className = "input-style">
            <label >{ label }:</label>
            <input style = { {marginLeft: '0.5em'} } {...field} />
            { meta.touched && meta.error ? <span>{meta.error}</span> : null }
        </div>
    )
}

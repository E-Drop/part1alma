import React from 'react';
import './styles/inputField.scss';
import {Field} from 'formik';

export const InputField = ({label, name, errors, touched, type = 'text'}) => {

  return (
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type}/>
      {errors[name] && touched[name] ? (
        <div>{errors[name]}</div>
      ) : null}
    </div>
  );
}
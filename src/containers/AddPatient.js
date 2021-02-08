import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions';
import { Formik , Form } from 'formik';
import {InputField} from '../components/InputField';
import './styles/addPatient.scss';

export const AddPatient = ({history}) => {
  const patients = useSelector(state => state.patients.patientsList);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const {id, name, lastname, birthdate} = values;
    const birth = (new Date(birthdate)).toLocaleDateString();
    dispatch(allActions.patientsActions.addPatient({id , name, lastname, birthdate: birth}))
    history.push('/');
  }
  
  const initialValues = {
    id: '',
    name: '',
    lastname: '',
    birthdate: ''
  };

  const validation = (values) => {
    const errors = {};
    const idRegex = new RegExp("^[0-9]+$");
    const lettersRegExp = new RegExp("^[a-zA-Z]{3,}");
    
    if (!values.id.match(idRegex) || patients.filter(a => a.id === values.id).length) {
      errors.id = 'Only numbers that doesn t exist allowed';
    }
    
    if (!values.name.match(lettersRegExp)) {
      errors.name = 'Only letters and at lease 3';
    }
    
    if (!values.lastname.match(lettersRegExp)) {
      errors.lastname = 'Only letters and at lease 3';
    }
   
    
    if (new Date(values.birthdate) > new Date().setFullYear(new Date().getFullYear()-18)) {
      errors.birthdate = 'You need to enter a user that has 18 years at lease';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      initialTouched={false}
      validate={validation}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ errors, touched}) => {

        return (
          <div className="add-form">
            <div className="add-form-container">
              <div className="add-form-title">
                <h3>Add Patient</h3>
              </div>
              <Form className="add-form-content">
                <InputField label="ID" name="id" errors={errors} touched={touched}/>
                <InputField label="first name" name="name" errors={errors} touched={touched}/>
                <InputField label="last name" name="lastname" errors={errors} touched={touched}/>
                <InputField label="birth date" type="date" name="birthdate" errors={errors} touched={touched}/>
                <button type="submit">Submit</button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
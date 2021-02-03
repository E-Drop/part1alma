import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import { useFormik } from 'formik';
import './PatientsList.scss';

export const AddPatient = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(allActions.patientsActions.addPatient({name: values.name}))
  }
  const initialValues = {
    name: ''
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <div className="AddPatientContainer">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </form>
    </div>
  );
}
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../actions';
import { Patient } from '../components/Patient';
import './PatientsList.scss';

export const PatientsList = () => {
  const patients = useSelector(state => state.patients.patientsList);
  const dispatch = useDispatch();

  return (
    <div className="PatientsListContainer">
    
      {patients.length ? patients.map((x, key) => <Patient key={key} patient={x} />) : 'no patients'}
      <button onClick={() => {
        dispatch(allActions.patientsActions.addPatient({id:2, name: 'Miguel Angel', surname: 'Rosendo', birthdate: '19/12/1985'}))
      }}>Add Patient</button>
    </div>
  );
}
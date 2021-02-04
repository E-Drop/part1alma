import React from 'react';
import { useSelector } from 'react-redux';
import allActions from '../actions';
import { Patient } from '../components/Patient';
import './styles/PatientsList.scss';

export const PatientsList = ({history}) => {
  const patients = useSelector(state => state.patients.patientsList);

  return (
    <div className="PatientsListContainer">

      {patients.length ? patients.map((x, key) => <Patient key={key} patient={x} />) : 'no patients'}
      <button onClick={() => {
        history.push('/add');
      }}>Add Patient</button>
    </div>
  );
}
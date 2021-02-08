import React from 'react';
import { useSelector } from 'react-redux';
import { Patient } from '../components/Patient';
import './styles/patientsList.scss';

export const PatientsList = ({history}) => {
  const patients = useSelector(state => state.patients.patientsList);

  return (
    <div className="patients-list">
      <div className="patients-list-container">
        <div className="patients-list-header">
        <div>Id</div><div>Name</div><div>Last Name</div><div>Birth Date</div><div>Delete</div>
        </div>
        <div className="patients-list-content">
        {patients.length ? patients.map((x, key) => <Patient key={key} patient={x} />) : <div className="patients-list-content-empty">no patients</div>}
        </div>
        <button onClick={() => { history.push('/add');}}>+</button>
      </div>
    </div>
  );
}
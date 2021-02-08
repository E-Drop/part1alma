import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import './styles/patient.scss';

export const Patient = ({patient}) => {
  const dispatch = useDispatch();
  const {id, name, lastname, birthdate} = patient;
  return (
    <div className="patient">
      <div>{id}</div><div>{name}</div> <div>{lastname}</div> <div>{birthdate}</div>
      <div onClick={()=>dispatch(allActions.patientsActions.deletePatient(id))}>🗑</div>
    </div>
  );
}
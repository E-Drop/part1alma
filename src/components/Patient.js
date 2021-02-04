import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';


export const Patient = ({patient}) => {
  const dispatch = useDispatch();
  const {id, name, lastname, birthdate} = patient;
  return (
    <div className="PatientsListContainer">
      {id + name + lastname + birthdate}
      <div onClick={()=>dispatch(allActions.patientsActions.deletePatient(id))}>🗑</div>
    </div>
  );
}
import React from 'react';

export const Patient = ({patient}) => {
  return (
    <div className="PatientsListContainer">
      {patient.id + patient.name}
    </div>
  );
}
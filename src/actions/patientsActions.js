const addPatient = (payload) => {
  return {
    type: 'ADD_PATIENT',
    payload: payload
  }
}
const deletePatient = (payload) => {
  return {
    type: 'DELETE_PATIENT',
    payload: payload
  }
}

export default {
  addPatient,
  deletePatient
}
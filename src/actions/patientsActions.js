const addPatient = (payload) => {
  return {
    type: 'ADD_PATIENT',
    payload: payload
  }
}

export default {
  addPatient,
}
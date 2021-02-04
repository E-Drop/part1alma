
const initialPatientsData = {
  patientsList: []
}

const patientsReducer = (state = initialPatientsData, action) => {
  switch (action.type) {
    case 'ADD_PATIENT': {
      const { payload = {} } = action;
      return {
        patientsList: [...state.patientsList, payload]
      };
    }
    case 'DELETE_PATIENT': {
      const { payload = {} } = action;
      return {
        patientsList: [...state.patientsList.filter(item => item.id !== payload)]
      };
    }

    default:
      return state;
  }
}

export default patientsReducer;
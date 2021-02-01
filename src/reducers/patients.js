
const initialPatientsData = {
  patientsList: []
}

const patientsReducer = (state = initialPatientsData, action) => {
  switch (action.type) {

    case 'ADD_PATIENT': {
      const { payload = {} } = action;
      return {
        ...state,
        patientsList: [...state.patientsList, payload]
      };
    }

    default:
      return state;
  }
}

export default patientsReducer;
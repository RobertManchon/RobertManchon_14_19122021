const initialState = {
	employees: [],
}

const employees = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_EMPLOYEE":
			return {
				employees: [...state.employees, action.payload]
			}
		default:
			return state;
	}
}

export default employees;
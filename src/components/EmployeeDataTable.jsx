import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const EmployeeDataTable = () => {

	const columns = ["First Name", "Last Name", "Date of Birth", "Start Date", "Street", "City", "State", "Zip Code", "Department"];

	const options = {
		filter: false,
		download: false,
		selectableRowsHideCheckboxes: true,
		selectableRowsHeader: false,
		print: true,
		viewColumns: false
	};

	const employees = useSelector((state) => state.employees.employees);
	const employeesArray = [];
	employees.forEach(employee => {
		const data = [employee.firstName, employee.lastName, employee.dob, employee.startDate, employee.street, employee.city, employee.stateName, employee.zipCode, employee.department];
		employeesArray.push(data);
	});

	const data = employeesArray;

	return (
		<MUIDataTable
			title={"Current Employees"}
			data={data}
			columns={columns}
			options={options}
		/>
	)
}
export default EmployeeDataTable;
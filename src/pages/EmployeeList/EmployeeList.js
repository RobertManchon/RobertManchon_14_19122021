import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import './employee-list.css';
const EmployeeDataTable = React.lazy(() =>import('../../components/EmployeeDataTable'));

const  EmployeeList=()=> {
	return (
		<div className="list-container">
			<Suspense fallback={<div>Loading...</div>}>
				<EmployeeDataTable />
			</Suspense>
			<NavLink to='/' className="link-menu">Home</NavLink>
		</div>
	)
}

export default EmployeeList;
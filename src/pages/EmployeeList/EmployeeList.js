import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
// import EmployeeDataTable from '../../components/EmployeeDataTable.jsx';
import './employee-list.css';
const EmployeeDataTable = React.lazy(() =>import('../../components/EmployeeDataTable'));

export default function EmployeeList() {
	return (
		<div className="list-container">
			<Suspense fallback={<div>Loading...</div>}>
				<EmployeeDataTable />
			</Suspense>
			<NavLink to='/' className="link-menu">Home</NavLink>
		</div>
	)
}
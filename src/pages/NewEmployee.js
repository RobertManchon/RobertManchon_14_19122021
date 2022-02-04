import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle/PageTitle.jsx';
import NewEmployeeForm from '../components/NewEmployeeForm/NewEmployeeForm.jsx';
import { Modal } from 'bzq-simple-modal-react';

export default function NewEmployee() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => {
		isModalActive ? setModalActive(false) : setModalActive(true)

	};
	return (
		<main>
			<PageTitle title="HRnet" />
			<NewEmployeeForm onSubmit={handleClickModal}/>
			<NavLink to='/employee-list' className="link-menu">View Current Employees</NavLink>
			<Modal
				modalContent="New employee data added!"
				handleClick={handleClickModal}
				isActive={isModalActive} 
				refresh={true}
				backgroundStyle={{ width: "100vw", height: "100vw",backgroundColor:"rgba(0,0,0,0.2)" }}
				contentStyle={{minHeight:"4%",paddingTop:"3rem",font: "bold 22px/1 Montserrat,sans-serif"}}
			/>
		</main>
	)
}
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import SelectForm from '../SelectForm.jsx';
import DateSelector from '../DateSelector.jsx';
import './new-employee-form.css';
import Actions from '../../redux/actions';
import { departments } from '../../assets/data/departments.js';
import { stateList } from '../../assets/data/state.js';
import PropTypes from 'prop-types';

const NewEmployeeForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');

    const stateNames = [];
    stateList.forEach((state) => {
        stateNames.push(state.name);
    });

    const dispatch = useDispatch()

    const [initialDob, setInitialDob] = useState(null);
    const [initialStartDate, setInitialStartDate] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('Alabama');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('Sales');

    const fillForm = (e, changeState) => {
        changeState(e.target.value);
    }

    const handleDateChange = (date, state, displayState) => {
        const dateString = date.toLocaleString('en-GB');
        const dateArray = dateString.split(",");
        displayState(date);
        state(dateArray[0].replaceAll("/", "-"));
    }

    //function to capitalize input
    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onSubmit = () => {
        if (firstName.length > 0
            && lastName.length > 0
            && dob.length > 0
            && startDate.length > 0
            && street.length > 0
            && city.length > 0
            && stateName.length > 0
            && zipCode.length > 0
            && department.length > 0
        ) {
            dispatch(Actions.addEmployee({
                firstName: capitalize(firstName),
                lastName: capitalize(lastName),
                dob,
                startDate,
                street: capitalize(street),
                city: capitalize(city),
                stateName,
                zipCode,
                department
            }))
            props.onSubmit();
        } else {

            return setErrorMessage('Please fill all fields!');
        }

    }


    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" aria-label="name" name="first-name" id="first-name" onBlur={e => fillForm(e, setFirstName)}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" aria-label="last name" name="last-name" id="last-name" onBlur={e => fillForm(e, setLastName)}/>

                <label htmlFor="date-of-birth" >Date of Birth</label>
                <DateSelector name="date-of-birth"  onChange={(date) => handleDateChange(date, setDob, setInitialDob)} selected={initialDob}/>

                <label htmlFor="start-date" >Start Date</label>
                <DateSelector name="start-date" aria-label="start date" onChange={(date) => handleDateChange(date, setStartDate, setInitialStartDate)} selected={initialStartDate} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" aria-label="street" name="street" onBlur={e => fillForm(e, setStreet)}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" aria-label="city" name="city" onBlur={e => fillForm(e, setCity)}/>

                    <label htmlFor="state">State</label>
                    <SelectForm name="state" aria-label="state" data={stateNames} value={stateName} onChange={e => fillForm(e, setStateName)}/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" aria-label="zip code" name="zip-code" onBlur={e => fillForm(e, setZipCode)}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <SelectForm name="department" aria-label="department" data={departments} value={department} onChange={e => fillForm(e, setDepartment)}/>
                <span className='errorMessage'>{errorMessage}</span>
            </form>

            <button aria-label="save" onClick={onSubmit} className="submit-btn">Save</button>
        </div>
    )
}

export default NewEmployeeForm;

NewEmployeeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
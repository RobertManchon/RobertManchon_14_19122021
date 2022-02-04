import DatePicker from 'react-datepicker';
import { FaRegHandPointDown, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import {MONTHS} from '../assets/data/constants'
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DateSelector = (props) => {

	const years = range(1920, getYear(new Date()) + 1, 1);

	return (

		<DatePicker
			renderCustomHeader={({
			date,
			changeMonth,
			changeYear,
			decreaseMonth,
			increaseMonth,
			prevMonthButtonDisabled,
			nextMonthButtonDisabled,
			}) => (
				<div
					style={{
						margin: 10,
						display: 'flex',
						justifyContent: 'center'
					}}
				>
					<button aria-label="decreaseMonth" type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}><FaChevronCircleLeft /></button>

					<select
						value={getYear(date)}
						onChange={({ target: { value }}) => changeYear(value)}
					>
						{years.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<select
						value={MONTHS[getMonth(date)]}
						onChange={({ target: { value }}) =>
							changeMonth(MONTHS.indexOf(value))}
					>
						{MONTHS.map(option => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<button aria-label="increaseMonth" type='button' onClick={increaseMonth} disabled={nextMonthButtonDisabled}><FaChevronCircleRight /></button>
				</div>
			)}
			selected={props.selected}
			onChange={props.onChange}
			dateFormat="dd-MM-yyyy"
			name={props.name}
			todayButton={<FaRegHandPointDown />}
		/>

	);
};

export default DateSelector;

DateSelector.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	// selected: PropTypes.string
}
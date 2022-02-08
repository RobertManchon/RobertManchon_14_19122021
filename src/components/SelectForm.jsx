import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SelectForm=(props)=> {
    return (
        <select name={props.name} id={props.name} value={props.value} onChange={props.onChange}>
            {props.data.map((datum, index) => (
                <option key={index} value={datum}>{datum}</option>
            ))}
        </select>
    )
}
export default SelectForm;

SelectForm.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}


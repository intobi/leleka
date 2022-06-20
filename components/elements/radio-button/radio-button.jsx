import React from 'react'

const RadioButton = ({ name, label, background, value, onChange, valueSecond, fieldName}) => {
    return <div className='radio'>
        <input onChange={(e)=>{onChange(valueSecond, name)}} type="radio" id={fieldName} name={fieldName}
               checked={value}/>
        <label style={{backgroundColor: background}} htmlFor={fieldName}>{label}</label>
    </div>
}

export default RadioButton
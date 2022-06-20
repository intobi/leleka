import React from 'react'

const CheckBox = ({name, label, background, value, onChange}) => {
    return <div className='checkbox'>
        <input type="checkbox" id={name} name={name}
               checked={value} onChange={(e)=>{onChange(e.target.checked, name)}}/>
        <label style={{backgroundColor: background}} htmlFor={name}>{label}</label>
    </div>
}

export default CheckBox
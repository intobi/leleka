import React from 'react'
import PhoneInput from 'react-phone-input-2'

const PhoneField = ({value, country, onChange}) => {

    return <div>
        <PhoneInput
            country={country}
            value={value}
            onChange={phone => onChange(phone, 'number')}
            enableSearch
        />
    </div>
}

export default PhoneField
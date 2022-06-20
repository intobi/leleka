import React from 'react'
import PhoneInput from 'react-phone-input-2'

const PhoneField = ({value, country, onChange, error, title}) => {

    let countryCode = country
    if (country === 'en') {
        countryCode = 'cz'
    }
    return <div className={`phone-field ${error && 'phone-field__error-styles'}`}>
        <p className='phone-field__title'>{title}</p>
        <PhoneInput
            country={countryCode}
            value={value}
            onChange={phone => onChange(phone, 'number')}
            enableSearch
        />
        {error && <p className='phone-field__error'>{error}</p>}
    </div>
}

export default PhoneField
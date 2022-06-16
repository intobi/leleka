import React from 'react'

const Input = ({title, error, value, name, onChange}) => {
    return <div className='input-filed'>
        <p className='input-filed__name'>{title}</p>
        <div style={{position: 'relative'}}>
            <input onChange={(event) => {
                onChange(event.target.value, name)
            }} value={value} placeholder={title} type="text"/>
            {error && <p className='input-filed__error'>{error}</p>}
        </div>
    </div>
}

export default Input
import React from 'react'

const SecondInput = ({title, error, value, subTitle='', name, onChange, placeholder = true}) => {

    let placeholderText = ''
    if (placeholder) {
        placeholderText = title
    }

    return <div className='second-input-filed'>
        <p className='second-input-filed__name'>{title}</p>
        {subTitle && <p className='second-input-filed__sub-name'>{subTitle}</p>}
        <div style={{position: 'relative', width: 'inherit'}}>
            <input className={error && 'second-input-filed__error-border'} onChange={(event) => {
                onChange(event.target.value, name)
            }} value={value} placeholder={placeholderText} type="text"/>
            {error && <p className='second-input-filed__error'>{error}</p>}
        </div>
    </div>
}

export default SecondInput
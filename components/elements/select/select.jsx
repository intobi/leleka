import React, {useState} from 'react'

const Select = ({name, error, options, call, value, onChange}) => {

    const [open, setOpen] = useState(false)

    const ClickItem = (value) => {
        setOpen(false)
        onChange(value)
    }

    let title = ''
    if (value) {
        options.forEach((el) => {
            if (el.value === value) {
                title = el.title
            }
        })
    }

    const optionsArray = options.map((el) => {
        return <p key={el.value} onClick={() => {
            ClickItem(el.value)
        }}>{el.title}</p>
    })

    return <div className='select-filed'>
        <p className='select-filed__name'>{name}</p>
        <div style={{position: 'relative'}}>
            <div onClick={() => {
                setOpen(true)
            }} className={`select-filed__block ${error && 'input-filed__error-border'}`}>
                <p>{title ? title : call}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12"
                     fill="none">
                    <path
                        d="M19.5452 0.939489C19.2639 0.658282 18.8824 0.500309 18.4847 0.500309C18.0869 0.500309 17.7055 0.658282 17.4242 0.93949L9.99919 8.36449L2.57419 0.939491C2.29129 0.666254 1.91239 0.515062 1.51909 0.51848C1.1258 0.521897 0.749577 0.679651 0.471465 0.957763C0.193353 1.23587 0.0356017 1.61209 0.0321837 2.00539C0.0287658 2.39868 0.179958 2.77759 0.453195 3.06049L8.9387 11.546C9.21999 11.8272 9.60145 11.9852 9.9992 11.9852C10.3969 11.9852 10.7784 11.8272 11.0597 11.546L19.5452 3.06049C19.8264 2.7792 19.9844 2.39773 19.9844 1.99999C19.9844 1.60224 19.8264 1.22078 19.5452 0.939489Z"
                        fill="#293850"/>
                </svg>
            </div>

            {
                open && <div className='select-filed__options'>
                    {optionsArray}
                </div>
            }
            {error && <p className='select-filed__error'>{error}</p>}

        </div>
    </div>
}

export default Select
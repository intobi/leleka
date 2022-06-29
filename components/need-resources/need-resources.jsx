import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../../images/Logo.svg'
import Link from 'next/link'
import Input from '../elements/input/input'
import Select from '../elements/select/select'
import PhoneField from '../elements/phone-input/phone-input'
import Head from 'next/head'
import {Api} from '../../api'

const NeedResources = ({text, url}) => {

    const options = [
        {title: text[15], value: 'passport'},
        {title: text[16], value: 'world-passport'},
        {title: text[17], value: 'id-card'}
    ]

    const errorsTextArray = {
        type: text[13],
        last_name: text[10],
        first_name: text[11],
        third_name: text[12],
        id_document: text[14],
        number: text[14]
    }

    const [state, setState] = useState({
        type: '',
        last_name: '',
        first_name: '',
        third_name: '',
        id_document: '',
        number: ''
    })

    const [errors, setErrors] = useState({
        type: false,
        last_name: false,
        first_name: false,
        third_name: false,
        id_document: false,
        number: false
    })

    const [feedBack, setFeedBack] = useState(false)

    const ChangeSelect = (value) => {
        let newState = {...state}
        newState.type = value

        let name = 'type'
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false
            })
        }
        setState(newState)
    }

    const ChangeField = (value, name) => {
        let newState = {...state}
        newState[name] = value

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false
            })
        }
        setState(newState)
    }

    const CheckValidation = () => {

        let haveError = false
        let errorsObj = {}
        for (let key in state) {
            if (!state[key]) {
                haveError = true
                errorsObj[key] = errorsTextArray[key]
            }
        }
        setErrors({
            ...errors,
            ...errorsObj
        })

        return haveError
    }

    const [loading, setLoading] = useState(false)

    const SendData = () => {

        if (!CheckValidation()) {
            setLoading(true)
            Api.sendNeedResourcesData(state).then(r => {
                if (r.status === 200) {
                    setFeedBack(true)
                }
            })
        }
    }

    return <>
        <Head>
            <title>{text[21]}</title>
        </Head>
        <div style={{minHeight: '100vh'}} className='wrapper'>
            <div className='header'>
                <div className='header__container'>
                    <div className='need-resources-page-logo'>
                        <Image className='logo' src={logo} alt="leleka"/>
                    </div>
                    <div>
                        <h1 className='need-resources-page-title'>{text[0]}</h1>
                    </div>
                    <Link href={`/${url === 'cz' ? '' : url}`}>
                        <div className='close-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                 fill="none">
                                <path
                                    d="M15.9379 13L24.8962 4.06248C25.2885 3.67018 25.5089 3.13811 25.5089 2.58331C25.5089 2.02852 25.2885 1.49645 24.8962 1.10415C24.5039 0.711847 23.9718 0.491455 23.417 0.491455C22.8622 0.491455 22.3302 0.711847 21.9379 1.10415L13.0004 10.0625L4.06286 1.10415C3.67056 0.711847 3.13849 0.491455 2.58369 0.491455C2.0289 0.491455 1.49683 0.711847 1.10453 1.10415C0.712228 1.49645 0.491837 2.02852 0.491837 2.58331C0.491837 3.13811 0.712228 3.67018 1.10453 4.06248L10.0629 13L1.10453 21.9375C0.90926 22.1312 0.754273 22.3616 0.648504 22.6154C0.542736 22.8693 0.488281 23.1416 0.488281 23.4166C0.488281 23.6917 0.542736 23.964 0.648504 24.2178C0.754273 24.4717 0.90926 24.7021 1.10453 24.8958C1.2982 25.0911 1.52862 25.2461 1.78249 25.3518C2.03637 25.4576 2.30867 25.5121 2.58369 25.5121C2.85872 25.5121 3.13102 25.4576 3.3849 25.3518C3.63877 25.2461 3.86919 25.0911 4.06286 24.8958L13.0004 15.9375L21.9379 24.8958C22.1315 25.0911 22.362 25.2461 22.6158 25.3518C22.8697 25.4576 23.142 25.5121 23.417 25.5121C23.6921 25.5121 23.9644 25.4576 24.2182 25.3518C24.4721 25.2461 24.7025 25.0911 24.8962 24.8958C25.0915 24.7021 25.2465 24.4717 25.3522 24.2178C25.458 23.964 25.5124 23.6917 25.5124 23.4166C25.5124 23.1416 25.458 22.8693 25.3522 22.6154C25.2465 22.3616 25.0915 22.1312 24.8962 21.9375L15.9379 13Z"
                                    fill="#293850"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{background: 'none'}} className='wrapper__content'>
                <div style={{marginTop: '56px'}}>
                    <p className='need-resources-title'>{text[1]}</p>
                    <div className='need-resources-form'>
                        <Input error={errors.last_name} title={text[2]} name='last_name' value={state.last_name}
                               onChange={ChangeField}/>
                        <Input error={errors.first_name} title={text[3]} name='first_name' value={state.first_name}
                               onChange={ChangeField}/>
                        <Input error={errors.third_name} title={text[4]} name='third_name' value={state.third_name}
                               onChange={ChangeField}/>
                        <Select
                            error={errors.type}
                            name={text[5]}
                            value={state.type}
                            onChange={(value) => {
                                ChangeSelect(value)
                            }}
                            options={options}
                            call={text[7]}/>
                        <Input error={errors.id_document} title={text[6]} name='id_document'
                               value={state.id_document} onChange={ChangeField}/>
                    </div>
                    <div className='need-resources-form-second'>
                        <PhoneField title={text[8]} error={errors.number} value={state.number} onChange={ChangeField}
                                    country={url}/>
                        <div>
                            <button onClick={SendData} className={`button ${loading && 'loading'}`}>{text[9]}</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                feedBack && <div className='overlay-feedback'>
                    <div style={{minHeight: '100vh'}} className='wrapper'>
                        <div className='header'>
                            <div className='header__container'>
                                <div>
                                    <Image className='logo' src={logo} alt="leleka"/>
                                </div>

                                <Link href={`/${url === 'cz' ? '' : url}`}>
                                    <div className='close-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                             fill="none">
                                            <path
                                                d="M15.9379 13L24.8962 4.06248C25.2885 3.67018 25.5089 3.13811 25.5089 2.58331C25.5089 2.02852 25.2885 1.49645 24.8962 1.10415C24.5039 0.711847 23.9718 0.491455 23.417 0.491455C22.8622 0.491455 22.3302 0.711847 21.9379 1.10415L13.0004 10.0625L4.06286 1.10415C3.67056 0.711847 3.13849 0.491455 2.58369 0.491455C2.0289 0.491455 1.49683 0.711847 1.10453 1.10415C0.712228 1.49645 0.491837 2.02852 0.491837 2.58331C0.491837 3.13811 0.712228 3.67018 1.10453 4.06248L10.0629 13L1.10453 21.9375C0.90926 22.1312 0.754273 22.3616 0.648504 22.6154C0.542736 22.8693 0.488281 23.1416 0.488281 23.4166C0.488281 23.6917 0.542736 23.964 0.648504 24.2178C0.754273 24.4717 0.90926 24.7021 1.10453 24.8958C1.2982 25.0911 1.52862 25.2461 1.78249 25.3518C2.03637 25.4576 2.30867 25.5121 2.58369 25.5121C2.85872 25.5121 3.13102 25.4576 3.3849 25.3518C3.63877 25.2461 3.86919 25.0911 4.06286 24.8958L13.0004 15.9375L21.9379 24.8958C22.1315 25.0911 22.362 25.2461 22.6158 25.3518C22.8697 25.4576 23.142 25.5121 23.417 25.5121C23.6921 25.5121 23.9644 25.4576 24.2182 25.3518C24.4721 25.2461 24.7025 25.0911 24.8962 24.8958C25.0915 24.7021 25.2465 24.4717 25.3522 24.2178C25.458 23.964 25.5124 23.6917 25.5124 23.4166C25.5124 23.1416 25.458 22.8693 25.3522 22.6154C25.2465 22.3616 25.0915 22.1312 24.8962 21.9375L15.9379 13Z"
                                                fill="#293850"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div style={{background: 'none'}} className='wrapper__content overlay-feedback__content'>
                            <p>{text[18]}</p>
                            <p>{text[19]}</p>
                            <p>{text[20]}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
}

export default NeedResources
import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../../images/Logo.svg'
import Link from 'next/link'
import SecondInput from '../elements/second-input/input'
import CheckBox from '../elements/checkbox/checkbox'
import RadioButton from '../elements/radio-button/radio-button'
import PhoneField from '../elements/phone-input/phone-input'
import Head from "next/head";

const HaveResources = ({text, url}) => {

    const [state, setState] = useState({
        name: '',
        number: '',
        contacts: '',
        resources: '',
        location: '',
        category: {
            eat: false,
            clothes: false,
            farm: false,
            tech: false,
            transport: false,
            help: false,
            fin: false,
            have_job: false,
            other: false
        },
        delivery: true,
        notes: '',
        policy: ''
    })

    const errorsTextArray = {
        name: text[26],
        number: text[26],
        resources: text[26],
        location: text[26],
        category: text[27],
    }

    const [errors, setErrors] = useState({
        name: false,
        number: false,
        contacts: false,
        resources: false,
        location: false,
        category: false,
    })

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

    const ChangeCategory = (value, name) => {
        ChangeField({...state.category, [name]: value}, 'category')
    }

    const CheckValidation = () => {

        let haveError = false
        let errorsObj = {}
        for (let key in state) {

            if (key === 'category') {
                let categoryHaveError = true
                for (let item in state[key]) {
                    if (state[key][item]) {
                        categoryHaveError = false
                    }
                }

                if (categoryHaveError) {
                    haveError = categoryHaveError
                    errorsObj[key] = errorsTextArray[key]
                }


            } else if (!state[key]) {
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
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
    }


    return <>
        <Head>
            <title>{text[28]}</title>
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
            <div className='wrapper__content have-resources-content'>
                <div>
                    <SecondInput error={errors.name} placeholder={false} title={text[1]} name='name'
                                 value={state.name}
                                 onChange={ChangeField}/>
                    <div className='have-resources-content__phone'>
                        <PhoneField title={text[2]} error={errors.number} value={state.number}
                                    onChange={ChangeField}
                                    country={url}/>
                    </div>

                    <SecondInput subTitle={text[4]} error={errors.contacts} placeholder={false}
                                 title={text[3]} name='contacts' value={state.contacts}
                                 onChange={ChangeField}/>
                    <SecondInput subTitle={text[6]} error={errors.resources} placeholder={false}
                                 title={text[5]} name='resources' value={state.resources}
                                 onChange={ChangeField}/>
                    <SecondInput subTitle={text[8]} error={errors.location}
                                 placeholder={false} title={text[7]} name='location' value={state.location}
                                 onChange={ChangeField}/>

                    <div style={{marginTop: '50px'}}>
                        <p style={{fontWeight: '700', fontSize: '24px'}}>{text[9]}</p>
                        <CheckBox onChange={ChangeCategory} value={state.category.eat} name='eat'
                                  label={text[10]} background='#D2F6C6'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.clothes} name='clothes'
                                  label={text[11]}
                                  background='#D1E1F9'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.farm} name='farm' label={text[12]}
                                  background='#F0CFE7'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.tech} name='tech'
                                  label={text[13]} background='#F6F4C6'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.transport} name='transport'
                                  label={text[14]} background='#D2F6C6'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.help} name='help' label={text[15]}
                                  background='#D1E1F9'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.fin} name='fin' label={text[16]}
                                  background='#F0CFE7'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.have_job} name='have_job'
                                  label={text[17]} background='#CFF0E4'/>
                        <CheckBox onChange={ChangeCategory} value={state.category.other} name='other' label={text[18]}
                                  background='#CFF0E4'/>
                        {errors.category && <p className='have-resources-content__error-text'>{errors.category}</p>}
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <p style={{fontWeight: '700', fontSize: '24px'}}>{text[19]}</p>
                        <RadioButton valueSecond={true} onChange={ChangeField} value={state.delivery}
                                     fieldName='delivery1' name='delivery' label={text[20]} background='#D1E1F9'/>
                        <RadioButton valueSecond={false} onChange={ChangeField} value={!state.delivery}
                                     fieldName='delivery2' name='delivery' label={text[21]} background='#D2F6C6'/>
                        {errors.delivery && <p className='have-resources-content__error-text'>{errors.delivery}</p>}
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <SecondInput error={errors.notes} placeholder={false} title={text[22]} name='notes'
                                     value={state.notes}
                                     onChange={ChangeField}/>
                    </div>

                    <div className='checkbox policy-checkbox'>
                        <input onChange={(e) => {
                            ChangeField(e.target.checked, 'policy')
                        }} type="checkbox" id='policy' name='policy'
                               checked={state.policy}/>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor='policy'>{text[23]}</label>
                            <Link href='#'>{text[24]}</Link>
                        </div>
                    </div>

                    <div className='have-resources-button'>
                        <button onClick={() => {
                            SendData()
                        }} className={`button ${!state.policy && "disabled"} ${loading && 'loading'}`}>
                            {text[25]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HaveResources
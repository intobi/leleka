import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import logo from '../../images/Logo.svg'
import headerImg from '../../images/header-img.jpg'
import facebookIcon from '../../images/icons/facebook.svg'
import twitterIcon from '../../images/icons/twitter.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import facebookIconWhite from '../../images/icons/facebookWhite.svg'
import twitterIconWhite from '../../images/icons/twitterWhite.svg'
import instagramIconWhite from '../../images/icons/instagramWhite.svg'

import photoProof1 from '../../images/Rectangle 8.jpg'
import photoProof2 from '../../images/Rectangle 9.jpg'
import photoProof3 from '../../images/Rectangle 10.jpg'
import photoProof4 from '../../images/Rectangle 11.jpg'
import photoProof5 from '../../images/Rectangle 12.jpg'
import photoProof6 from '../../images/Rectangle 13.jpg'
import photoProof7 from '../../images/Rectangle 14.jpg'
import photoProof8 from '../../images/Rectangle 15.jpg'
import photoProof9 from '../../images/Rectangle 16.jpg'

import {Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'

const MainPage = ({text, lang}) => {

    const url = lang === 'cz' ? '' : lang

    const [selectLang, setSelectLang] = useState(false)

    const selectEl = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (selectEl.current) {
                if (!selectEl.current.contains(e.target)) {
                    setSelectLang(false)
                }
            }


        }
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    }, [])


    return <>
        <Head>
            <title>{text[1]}</title>
        </Head>
        <div className='wrapper'>
            <div className='header'>
                <div className='header__container'>
                    <div>
                        <Image className='logo' src={logo} alt="leleka"/>
                    </div>
                    <div className='header__buttons'>
                        <div ref={selectEl} onClick={() => {
                            setSelectLang(!selectLang)
                        }} className='header__select-lang'>
                            <p>{lang}</p>
                            <svg className={selectLang && 'active'} xmlns="http://www.w3.org/2000/svg" width="15"
                                 height="9"
                                 viewBox="0 0 15 9" fill="none">
                                <path
                                    d="M7.00028 7.99997C6.76662 8.00043 6.54019 7.91905 6.36028 7.76997L0.360276 2.76997C0.156059 2.60023 0.0276347 2.35632 0.00325494 2.09189C-0.0211248 1.82747 0.0605371 1.56419 0.230276 1.35997C0.400014 1.15575 0.643926 1.02733 0.908352 1.00295C1.17278 0.97857 1.43606 1.06023 1.64028 1.22997L7.00028 5.70997L12.3603 1.38997C12.4626 1.3069 12.5803 1.24487 12.7066 1.20744C12.8329 1.17001 12.9654 1.15792 13.0965 1.17186C13.2275 1.18579 13.3545 1.22549 13.4701 1.28866C13.5857 1.35184 13.6878 1.43724 13.7703 1.53997C13.8619 1.64279 13.9312 1.76342 13.974 1.89429C14.0168 2.02517 14.0321 2.16347 14.019 2.30053C14.0058 2.43759 13.9645 2.57047 13.8976 2.69082C13.8307 2.81118 13.7397 2.91643 13.6303 2.99997L7.63028 7.82997C7.44519 7.95549 7.22338 8.01534 7.00028 7.99997Z"
                                    fill="#08285A"/>
                            </svg>
                            <div className={`header__lang-list ${selectLang && 'active'}`}>
                                <Link href='/en'><p>EN</p></Link>
                                <Link href='/'><p>CZ</p></Link>
                                <Link href='/ua'><p>UA</p></Link>
                            </div>
                        </div>
                        <div>
                            <Link href={`${url}/bank-transfer-details`}>
                                <button className='button header__help-button'>{text[0]}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper__content'>
                <Row className='wrapper__page-title-container'>
                    <Col md={6} lg={6} xl={6}>
                        <div className='wrapper__page-title'>
                            <h1>{text[1]}</h1>
                            <p>{text[2]}</p>
                            <Link href={`${url}/bank-transfer-details`}>
                            <button className='button'>{text[0]}</button>
                            </Link>
                        </div>
                    </Col>
                    <Col className='wrapper__header-img-container' md={6} lg={6} xl={6}>
                        <Image className='wrapper__header-img' src={headerImg} alt="we believe in zsu"/>
                    </Col>
                </Row>
                <div className='wrapper__who-we-are'>
                    <h2>{text[3]}</h2>
                    <p>{text[4]}<br/><br/>{text[5]}<br/><br/>{text[6]}</p>
                    <Row style={{marginTop: '140px'}}>
                        <Col md={6} lg={6} xl={6}>
                            <div className='wrapper__who-we-are__feedback'>
                                <p>{text[7]}</p>
                                <p>{text[8]}</p>
                                <Link href={`${url}/have-resources`}>
                                <button className='button'>{text[7]}</button>
                                </Link>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={6}>
                            <div className='wrapper__who-we-are__feedback second'>
                                <p>{text[9]}</p>
                                <p>{text[10]}</p>
                                <Link href={`${url}/need-resources`}>
                                    <button className='button'>{text[9]}</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='wrapper__what-we-do'>
                    <h2>{text[11]}</h2>
                    <p>{text[12]}</p>
                    <ul>
                        <li>{text[13]}</li>
                        <li>{text[14]}</li>
                        <li>{text[15]}</li>
                    </ul>
                    <p>{text[16]}</p>
                    <ul>
                        <li>{text[17]}</li>
                        <li>{text[18]}</li>
                        <li>{text[19]}</li>
                        <li>{text[20]}</li>
                    </ul>
                    <div className='wrapper__what-we-do__photo-set'>
                        <div>
                            <Image src={photoProof1} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof2} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof3} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof4} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof5} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof6} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof7} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof8} alt='Proof photo'/>
                        </div>
                        <div>
                            <Image src={photoProof9} alt='Proof photo'/>
                        </div>
                    </div>
                </div>
                <div className='wrapper__socials-info'>
                    <p>{text[21]}</p>
                    <div>
                        <a rel="noreferrer" target='_blank' href="https://www.facebook.com/lelekafond"><Image src={facebookIcon}/></a>
                        <a rel="noreferrer" target='_blank' href="https://twitter.com/FondLeleka?t=iV81brfwqeHzkYC5My7tgA&s=09"><Image src={twitterIcon}/></a>
                        <a rel="noreferrer" target='_blank' href="https://instagram.com/leleka_fond?igshid=YmMyMTA2M2Y="><Image src={instagramIcon}/></a>
                    </div>
                </div>
                <div className='wrapper__financial-aid'>
                    <h3>{text[22]}</h3>
                    <p>{text[23]}</p>
                    <Link href={`${url}/bank-transfer-details`}>
                        <button className='button'>{text[24]}</button>
                    </Link>
                </div>
                <div className='wrapper__our-team'>
                    <h3>Our Team</h3>
                    <div>
                        <a rel="noreferrer" target='_blank' href="https://www.facebook.com/TatiNikolajeva">
                            <p>Taťjana Nikolajeva</p>
                            <p>Facebook</p>
                        </a>
                        <a rel="noreferrer" target='_blank' href="https://www.facebook.com/denys.leonti">
                            <p>Denys Leonti</p>
                            <p>Facebook</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__container__first'>
                        <div><Image className='logo' src={logo} alt="leleka"/></div>
                        <div className='footer__container__first__socials'>
                            <p>{text[25]}</p>
                            <div>
                                <a rel="noreferrer" target='_blank' href="https://www.facebook.com/lelekafond"><Image src={facebookIconWhite}/></a>
                                <a rel="noreferrer" target='_blank' href="https://twitter.com/FondLeleka?t=iV81brfwqeHzkYC5My7tgA&s=09"><Image src={twitterIconWhite}/></a>
                                <a rel="noreferrer" target='_blank' href="https://instagram.com/leleka_fond?igshid=YmMyMTA2M2Y="><Image src={instagramIconWhite}/></a>
                            </div>
                        </div>
                        <div>
                            <Link href={`${url}/bank-transfer-details`}>
                            <button className='button'>{text[0]}</button>
                            </Link>
                        </div>
                    </div>
                    <div className='footer__container__second'>
                        <p>©2022 lelekafond.cz</p>
                        <a target='_blank' rel="noreferrer" href="https://intobi.com/">powered by Intobi</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MainPage
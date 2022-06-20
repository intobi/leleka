import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../../images/Logo.svg'
import Link from 'next/link'
import {Col, Row} from 'react-bootstrap'
import Head from "next/head";

const BankTransferDetails = ({text, url}) => {

    const [select, setSelect] = useState(1)

    return <>
        <Head>
            <title>{text[4]}</title>
        </Head>
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
            <div style={{background: 'none'}} className='wrapper__content'>
                <Row style={{marginTop: '68px'}}>
                    <Col style={{marginTop: '12px'}} className='bank-transfer-text' lg={6}>
                        <p className='bank-transfer-text__first'>
                            {text[0]}
                        </p>
                        <p className='bank-transfer-text__second'>
                            {text[1]}
                        </p>
                        <p className='bank-transfer-text__first'>
                            {text[2]}
                        </p>
                        <p className='bank-transfer-text__second'>
                            {text[3]}
                        </p>
                    </Col>
                    <Col lg={6}>
                        <div className='bank-transfer-control'>
                            <div className={`bank-transfer-button ${select === 1 && 'active'}`} onClick={() => {
                                setSelect(1)
                            }}>
                                <p>SWIFT</p>
                            </div>
                            <div className={`bank-transfer-button ${select === 2 && 'active'}`} onClick={() => {
                                setSelect(2)
                            }}>
                                <p>CZK</p>
                            </div>
                            <div className={`bank-transfer-button ${select === 3 && 'active'}`} onClick={() => {
                                setSelect(3)
                            }}>
                                <p>CRYPTO</p>
                            </div>
                        </div>
                        {select === 1 && <div>
                            <p className='bank-transfer-details-text' style={{fontSize: '20px'}}>
                                <strong>BENEFICIARY/ PŘÍJEMCE/ОТРИМУВАЧ або Company</strong>
                                <strong>Name:</strong> Mezinárodní nadační fond Leleka
                                <br/><br/>
                                <strong>IČ:</strong> 170 919 77
                                <br/><br/>
                                <strong>Address:</strong> Hamerská 74/27, 360 01 Březová
                                <br/><br/>
                                <strong>IBAN Code:</strong> CZ28 2010 0000 0088 3355 8822
                                <br/><br/>
                                <strong>Name of the bank:</strong> Fio banka, a.s., Millennium Plaza, V Celnici 10 117
                                21
                                Praha 1
                                <br/><br/>
                                <strong>Bank SWIFT Code:</strong> FIOBCZPPXXX
                                <br/><br/>
                                <strong>PURPOSE OF PAYMENT/ÚČEL PLATBY/ПРИЗНАЧЕННЯ
                                    ПЛАТЕЖУ:</strong>
                                Charitable donation/Charitativní dar/ Благодійний внесок

                            </p>
                        </div>}
                        {select === 2 && <div>
                            <p className='bank-transfer-details-text' style={{fontSize: '20px'}}>
                                <strong> ACCOUNT/ÚČET/РАХУНОК:</strong><br/>
                                8833558822/2010
                                <br/><br/>
                                <strong> BENEFICIARY/ PŘÍJEMCE/
                                ОТРИМУВАЧ або Company</strong>
                                <strong>Name:</strong> Mezinárodní nadační fond Leleka
                                <br/><br/>
                                <strong>IČ:</strong> 170 919 77
                                <br/><br/>
                                <strong>PURPOSE OF PAYMENT/ÚČEL PLATBY/
                                    ПРИЗНАЧЕННЯ ПЛАТЕЖУ:</strong>
                                Charitable donation/Charitativní dar/ Благодійний внесок

                            </p>
                        </div>}
                        {select === 3 && <div>
                            <p className='bank-transfer-details-text' style={{fontSize: '20px'}}>
                                <strong>BTC:<br/></strong> 1Egx8po7W9kEBwbyJtTpMchXD1V2oyCP5b
                                <br/><br/>
                                <strong>ETH, USD₮, BUSD
                                    (ERC-20):<br/></strong> 0xd4ebac4f2dc192bbf85d21c7b2f8ba0672c7fa99
                                <br/><br/>
                                <strong>USD₮ (TRC-20):<br/></strong>
                                TThA5vu3EKEoiYx1HTiB3WQB9QCFscMhTj
                                <br/><br/>
                                <strong>SOL:<br/></strong> FZbkXPmXjoVcpaonUwzz9ynwXBNzi1Es7DZ1hBX4AHey

                            </p>
                        </div>}
                    </Col>
                </Row>
            </div>
        </div>
    </>
}

export default BankTransferDetails
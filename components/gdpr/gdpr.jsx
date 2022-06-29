import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../images/Logo.svg'
import Link from 'next/link'

const Gdpr = ({text, url}) => {

    return <>
        <Head>
            <title>GDPR</title>
        </Head>
        <div style={{minHeight: '100vh'}} className='wrapper'>
            <div className='header'>
                <div className='header__container'>
                    <div className='need-resources-page-logo'>
                        <Image className='logo' src={logo} alt="leleka"/>
                    </div>
                    <div></div>
                    <Link href={`${url === 'cz' ? '' : '/' + url}/have-resources`}>
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
                <div className='gdpr'>
                    <h1>{text[0]}</h1>
                    <h2>{text[1]}</h2>
                    <p>{text[2]}</p>
                    <p>{text[3]}</p>
                    <p>{text[4]}</p>
                    <p>{text[5]}</p>
                    <p>{text[6]}</p>
                    <p>{text[7]}</p>
                    <h2>{text[8]}</h2>
                    <p>{text[9]}</p>
                    <p>{text[10]}</p>
                    <p>{text[11]}</p>
                    <p>{text[12]}</p>
                    <p>{text[13]}</p>
                    <p>{text[14]}</p>
                    <h2>{text[15]}</h2>
                    <p>{text[16]}</p>
                    <p>{text[17]}</p>
                    <p>{text[18]}</p>
                    <p>{text[19]}</p>
                    <p>{text[20]}</p>
                    <h2>{text[21]}</h2>
                    <p>{text[22]}</p>
                    <p>{text[23]}</p>
                    <p>{text[24]}</p>
                    <p>{text[25]}</p>
                    <p>{text[26]}</p>
                    <h2>{text[27]}</h2>
                    <p>{text[28]}</p>
                    <p>{text[29]}</p>
                    <h2>{text[30]}</h2>
                    <p>{text[31]}</p>
                    <h2>{text[32]}</h2>
                    <p>{text[33]}</p>
                    <h2>{text[34]}</h2>
                    <p>{text[35]}</p>
                    <p>{text[36]}</p>
                    <p>{text[37]}</p>
                    <p>{text[38]}</p>
                    <p>{text[39]}</p>
                    <p>{text[40]}</p>
                    <p>{text[41]}</p>
                    <p>{text[42]}</p>
                    <h2>{text[43]}</h2>
                    <p>{text[44]}</p>
                    <p>{text[45]}</p>
                    <h2>{text[46]}</h2>
                    <p>{text[47]}</p>
                    <p>{text[48]}</p>
                    <p>{text[49]}</p>
                </div>
            </div>

        </div>
    </>
}

export default Gdpr
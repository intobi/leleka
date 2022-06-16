import React from 'react'
import BankTransferDetails from '../../../components/bank-transfer-details/bank-transfer-details'
import {langs} from '../../../langs'

const Index = () => {
    return <>
        <BankTransferDetails text={langs.transfer.en} url='en' />
    </>
}

export default Index

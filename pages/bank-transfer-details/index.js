import React from 'react'
import BankTransferDetails from '../../components/bank-transfer-details/bank-transfer-details'
import {langs} from '../../langs'

const Index = () => {
    return <>
        <BankTransferDetails text={langs.transfer.cz} url='cz' />
    </>
}

export default Index

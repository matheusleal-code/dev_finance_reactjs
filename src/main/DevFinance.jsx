import React from 'react'
import './DevFinance.css'

import Balance from '../components/Balance'
import FooterTitle from '../components/FooterTitle'
import HeaderTitle from '../components/HeaderTitle'
import Transaction from '../components/Transaction'

const DevFinance = props => (
    <div>

        <header>
            <HeaderTitle />
        </header>

        <main className="container">

            <Balance />

            <Transaction />

        </main>

        <footer>
            <FooterTitle />
        </footer>

    </div>
)

export default DevFinance
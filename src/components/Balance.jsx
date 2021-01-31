import React from 'react'
import './Balance.css'
import BalanceCard from './BalanceCard'

const Balance = props => (
    <section id="balance">
        <h2>Balanço</h2>

        <BalanceCard balanceTitle="Entradas" amount="5.000,00"/>
        <BalanceCard balanceTitle="Saídas" amount="2.000,00"/>
        <BalanceCard balanceTitle="Total" amount="3.000,00" total/>

    </section>
)

export default Balance
import React from 'react'
import './Balance.css'
import BalanceCard from './BalanceCard'

const Balance = props => (
    <section id="balance">
        <h2 className="sr-only">Balanço</h2>

        <BalanceCard balanceTitle="Entradas" amount="5.000,00" img="assets/income.svg" altImg="Image de entradas"/>
        <BalanceCard balanceTitle="Saídas" amount="2.000,00" img="assets/expense.svg" altImg="Image de saidas"/>
        <BalanceCard balanceTitle="Total" amount="3.000,00" img="assets/total.svg" altImg="Image de entradas" total />

    </section>
)

export default Balance
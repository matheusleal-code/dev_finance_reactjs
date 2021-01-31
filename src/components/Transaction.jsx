import React from 'react'
import './Transaction.css'
import TransactionItem from './TransactionItem'

const Transaction = props => (
    <section id="transaction">
        <h2>Transações</h2>
        <table id="data-table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <TransactionItem description="Luz" amount="-500" date="23/01/2021" expense/>
                <TransactionItem description="Criação de website" amount="5000,00" date="23/01/2021" income/>
                <TransactionItem description="Internet" amount="-200,00" date="23/01/2021" expense/>
            </tbody>
        </table>
    </section>
)

export default Transaction
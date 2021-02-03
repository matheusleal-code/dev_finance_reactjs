import React from 'react'
import './Transaction.css'
import TransactionItem from './TransactionItem'

const Transaction = props => {


    return (
        <section id="transaction">
            <h2 className="sr-only">Transações</h2>

            <table id="data-table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionItem description="Luz" amount="-500" date="23/01/2021" img="assets/minus.svg" altImg="Remover Transação" expense />
                    <TransactionItem description="Criação de website" amount="5000,00" date="23/01/2021" img="assets/minus.svg" altImg="Remover Transação" income />
                    <TransactionItem description="Internet" amount="-200,00" date="23/01/2021" img="assets/minus.svg" altImg="Remover Transação" expense />
                </tbody>
            </table>
        </section>
    )
}

export default Transaction
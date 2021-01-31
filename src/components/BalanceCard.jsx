import React from 'react'
import './BalanceCard.css'

const BalanceCard = props => (
    <div className={`card ${props.total ? "total": ""}`}>
        <h3>{props.balanceTitle}</h3>
        <p>R$ {props.amount}</p>
    </div>
)

export default BalanceCard
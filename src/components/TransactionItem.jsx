import React from 'react'
import './TransactionItem.css'

const TransactionItem = props => {

    function transactionType(props){
        let classType = ""
        if(props.income ? classType="income": "");
        if(props.expense ? classType="expense" : "");
        return classType
    }

    return (
        <tr>
            <td className="description">{props.description}</td>
            <td className={transactionType(props)}>R$ {props.amount}</td>
            <td className="date">{props.date}</td>
        </tr>
    )
}

export default TransactionItem
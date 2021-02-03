import React, { useState } from 'react'
import './DevFinance.css'

import Balance from '../components/Balance'
import FooterTitle from '../components/FooterTitle'
import HeaderTitle from '../components/HeaderTitle'
import Transaction from '../components/Transaction'
import ModalNewTransaction from '../components/ModalNewTransaction'

const DevFinance = props => {

    const [modal, setModal] = useState("")

    return (
        <div>

            <header>
                <HeaderTitle />
            </header>

            <main className="container">

                <Balance />
                <a href="#" onClick={() => setModal("active")} className="button new">+ Nova Transação</a>
                <Transaction />

            </main>

            <ModalNewTransaction modal={modal} setModal={() => setModal}/>

            <footer>
                <FooterTitle />
            </footer>

        </div>
    )
}


export default DevFinance
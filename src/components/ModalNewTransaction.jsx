import React from 'react'
import './ModalNewTransaction.css'

const ModalNewTransaction = props => {

    return (
        <div className={`modal-overlay ${props.modal}`}>
            <div className="modal">
                <div id="form">
                    <h2>Nova Transação</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="description" className="sr-only">Descrição</label>
                            <input type="text" id="description" name="description" placeholder="Descrição" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="amount" className="sr-only">Valor</label>
                            <input type="number" id="amount" name="amount" placeholder="Valor" step="0.01" />
                            <small className="help">Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</small>
                        </div>
                        <div className="input-group">
                            <label htmlFor="date" className="sr-only">Data</label>
                            <input type="date" id="date" name="date" />
                        </div>

                        <div className="input-group actions">
                            <a href="#" className="button cancel" onClick={props.setModal("")}>Cancelar</a>
                            <button>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ModalNewTransaction
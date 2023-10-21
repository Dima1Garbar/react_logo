import React from 'react'
import "./css/modal.css"

function Modal ({email, password, setModalWindow}){
    console.log(email)
    console.log(password)
    return (
    <div className="modal-window" onClick={() => setModalWindow(false)}>
        <div className='modal-box'>
            <span className='modal-text-success sign-in-input--text-styles modal-text--style'>Ви успішно увійшли в систему</span>
            <div className='modal-info sign-in-input--text-styles modal-text--style'>
                <p className='modal-text-email'>Ваш Email: <span className='modal-text--values-styles'>{email}</span></p>
                <p className='modal-text-password '>Ваш пароль: <span className='modal-text--values-styles'>{password}</span></p>
            </div> 
            
        </div>
    </div>
    )
}

export default Modal
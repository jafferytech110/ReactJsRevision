//importing react functional component or React Hooks for state changing functionality
import { useState } from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

// name of function must start with a capital letter
function Todo(props) {
    //useState can only be used in React components 
    //starting state handling functionality
    //useState returns an array with exactly two elements, first element is current state snapshot and second is..
    //.. a function which allows to change the value of current state
    //assigning false value to current state Modalisopen
    const [ModalIsOpen, setModalIsOpen] = useState(false)

    function deleteHandler() {
        //changing value of ModalIsOpen to true
        setModalIsOpen(true)
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }
    return <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {ModalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
        {ModalIsOpen && <Backdrop onTouch={closeModalHandler}/>}
        
    </div>
}
export default Todo
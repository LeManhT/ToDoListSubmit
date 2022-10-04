import React from 'react'
import ToDoFooter from './ToDoFooter'
import ToDoHeader from './ToDoHeader'
import FormListToDo from './FormListToDo'
import Header from './Header'


function Content() {
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="align">
                    <div className="app">
                        <ToDoHeader></ToDoHeader>
                        <FormListToDo></FormListToDo>
                    </div>
                    <ToDoFooter></ToDoFooter>
                </div>
            </div>
        </div>
    )
}

export default Content
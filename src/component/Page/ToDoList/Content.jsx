import React from 'react'
import ToDoFooter from './ToDoFooter'
import ToDoHeader from './ToDoHeader'
import FormListToDo from './FormListToDo'


function Content() {
    return (
        <div className='containerContent'>
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
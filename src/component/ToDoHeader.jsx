import React from 'react'

function ToDoHeader() {
    return (
        <div>
            <div className="info">
                <div className="date">
                    <p id="day"><span id="today">Sunday,</span><span id="daymonth"> 30th</span></p>
                    <p id='month'>January</p>
                </div>
                <div className="info-bottom clear">
                    <div className="left">
                        <p id="count">7</p>
                        <p id="tasks">Total</p>
                    </div>
                    <div className="middle">
                        <p id="remaining_done">5</p>
                        <p id="remaining_tasks">Remaining</p>
                    </div>
                    <div className="right">
                        <p id="count_done">2</p>
                        <p id="tasks_done">Done</p>
                    </div>
                </div>
            </div>

            <div>
                <p id="today2"><strong>Tasks</strong> for today</p>
            </div>
        </div>
    )
}

export default ToDoHeader
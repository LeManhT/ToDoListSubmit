import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
function ToDoHeader() {


    let initData = useSelector((state) => {
        return state.data;
    })
    const total = initData.length;
    let done = 0;
    let remaining = 0;

    let count = 0;
    for (let i = 0; i < initData.length; i++) {
        if (initData[i].Status !== 'done') {
            remaining++;
        } else {
            done++;
        }
    }

    const data = useSelector((state) => {
        return state.data
    })


    return (
        <div>
            <div className="info">
                <div className="date">
                    <p id="day"><span id="today">Sunday,</span><span id="daymonth"> 30th</span></p>
                    <p id='month'>January</p>
                </div>
                <div className="info-bottom clear">
                    <div className="left">
                        <p id="count">{total}</p>
                        <p id="tasks">Total</p>
                    </div>
                    <div className="middle">
                        <p id="remaining_done">{remaining}</p>
                        <p id="remaining_tasks">Remaining</p>
                    </div>
                    <div className="right">
                        <p id="count_done">{done}</p>
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

export default React.memo(ToDoHeader)
import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css'
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'

function Calendar_2() {
    const navi = useNavigate()
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      // ตรวจสอบว่า newDate ไม่ใช่ null (ในกรณีที่ผู้ใช้กดปิดปฏิทินโดยไม่เลือกวันที่ใด)
      if (newDate !== null) {
        setDate(newDate);
      }
    };
  
  return (
    <div className="App">
      <header className="Calendar">
        <h1 className='text-center'>เลือกวันที่</h1>
        <div className='calendar-container'>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </header>
      <button onClick={() => navi("/advice_1")}>ถัดไป</button>
    </div>
  )
}

export default Calendar_2
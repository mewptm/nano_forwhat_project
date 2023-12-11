import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";


function Calendar_1() {
  const navi = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
    }
  };

  const handleNext = () => {
    // Redirect to the next page on button click
    navi('/Weight_1');
  };

  return (
    <div className="App">
      <header className="Calendar">
        <h1 className="text-center">วัน/เดือน/ปีเกิด</h1>
        <br />
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">กรุณาเลือกวันที่ </span> {date.toDateString()}
        </p>
      </header>
      <br />
      <div>
        <Button className="next-button" onClick={handleNext}>
          ถัดไป
        </Button>
        <Link to="/yesno_30">
        <Button shape="circle"
          style={{ position: 'absolute', left: 400, top: 20, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
        </Link>
      </div>
    </div>
  );
}

export default Calendar_1;

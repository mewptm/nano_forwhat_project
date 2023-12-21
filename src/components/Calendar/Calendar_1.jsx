import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css'
import styles from '../Bmi/Bmi.module.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
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
        <h1 className={styles.Bmi1}>วัน/เดือน/ปีเกิด</h1>
        <br/>
        <div className='calendar-container'>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">กรุณาเลือกวันที่ </span> {date.toDateString()}
        </p>
      </header>
      <br/>
      <div>
      <Link to="/Weight_1"> {/* Changed the route for the "No" response */}
      <button className={styles.nextbutton}>ถัดไป</button>
          </Link>
      </div>
      <div className='chevron-icon'>
          <Link to="/yesno_30">
          <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{right:270 , top: 10, fontSize: '22px', width: '50px', height: '50px' }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  );
}

export default Calendar_1;

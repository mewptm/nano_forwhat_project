import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css'
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
        <h1 className='text-center'>วัน/เดือน/ปีเกิด</h1>
        <br/>
        <div className='calendar-container'>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center"> <br/>
          <span className="bold">วันที่เลือก</span> {date.toDateString()}
        </p>
      </header>
      <br/>
      <div>
      <Link to="/Weight_1"> {/* Changed the route for the "No" response */}
            <Button className='next-button'>ถัดไป</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
      </div>
      <div className='chevron-icon'>
          <Link to="/yesno_30">
          <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ left: 100, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  );
}

export default Calendar_1;

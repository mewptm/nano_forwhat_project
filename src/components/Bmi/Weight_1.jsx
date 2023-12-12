import React, { useState } from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weight_1(props) {
  const [weight, setWeight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
     {
      setWeight(value);
      // เรียก callback function ที่ถูกส่งมาจาก Component ที่เรียกใช้ Weight
      props.onWeightChange(value);
    }
  };

  return (
    <div className='Bmi1'>
      <h2>น้ำหนักของคุณเท่าไหร่</h2>

      <div class="input-label">
      <input type="number"  onChange={handleInputChange} defaultValue={0} />
      <label htmlFor="height"><h3>กิโลกรัม</h3></label>
      </div>
      <br />
      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 35 กิโลกรัม ถึง 200 กิโลกรัม</p>
      <br />
      <Image
          width={300}
          height={300}
          src="/img/w1.jpg"
        />
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <Link to="/Height_1">
            <Button className='next-button'>ถัดไป</Button>
          </Link>
        </div>
        <div className='chevron-icon'>
      <Link to="/Calendar_1">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ position: 'absolute', left: 100, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>

      </div>
    </div>
    
  );
}

export default Weight_1;

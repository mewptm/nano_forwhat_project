import React, { useState } from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Height_1(props) {
  const [height, setHeight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
    
      setHeight(value);
      // เรียก callback function ที่ถูกส่งมาจาก Component ที่เรียกใช้ Height
      props.onHeightChange(value);
    
  };

  return (
    <div className='Bmi1'>
      <h2>ส่วนสูงของคุณเท่าไหร่</h2>

      <div class="input-label">
      <input type="number"  onChange={handleInputChange} />
      <label htmlFor="height"><h3>ซม.</h3></label>
      </div>
      <br />
      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 100 ซม. ถึง 250 ซม.</p>
      <br />
      <Image
          width={300}
          height={500}
          src="/img/h1.jpg"
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
        <Link to="/Target"> {/* Changed the route for the "No" response */}
            <Button className='next-button'>ถัดไป</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
        <div className='chevron-icon'>
      <Link to="/Weight_1">
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

export default Height_1;

import React from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import './YesnoQuestion.css';

const boldStyle = {
  fontWeight: 900, // ค่าที่สามารถกำหนดได้คือ 100-900 
};

function Ynquiz1() {
  return (
    <div className='font-family'>
      <div className='Ynquiztion'>
        <h1 style={boldStyle}> เป้าหมายที่คุณต้องการ ลดน้ำหนัก </h1>
        <Image className='imgmedia'
          width={500}
          height={500}
          src="/img/yn1.jpg"
        /><br />
        <div className="button-container">
          <Link to="/yesno_2">
            <Button className='no-button' style={{ fontWeight: 900 }}>ไม่</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
          <h1 style={boldStyle}>&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h1>
          <Link to="/yesno_2"> {/* Changed the route for the "No" response */}
            <Button className='yes-button' style={{ fontWeight: 900 }}>ใช่</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ynquiz1;

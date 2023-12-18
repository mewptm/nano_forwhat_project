import React from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './YesnoQuestion.css';


const boldStyle = {
  fontWeight: 900, // ค่าที่สามารถกำหนดได้คือ 100-900 
};


function Ynquiz13() {
  return (
    <div className='font-family'>
      <div className='Ynquiztion'>
        <h1 style={boldStyle} > พฤติกรรมของคุณในช่วงระหว่างวันคือ นั่งเกือบทั้งวัน </h1>
        <Image className='imgmedia'
          width={500}
          height={500}
          src="/img/yn13.jpg"
        /><br />
        <div className="button-container">
          <Link to="/yesno_14">
          <Button className='no-button' style={{ fontWeight: 900 }}>ไม่</Button>
          </Link>
          <h1 style={boldStyle} >&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h1>
          <Link to="/yesno_14"> {/* Changed the route for the "No" response */}
          <Button className='yes-button' style={{ fontWeight: 900 }}>ใช่</Button>
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/yesno_12">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ left: 10, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  );
}

export default Ynquiz13;

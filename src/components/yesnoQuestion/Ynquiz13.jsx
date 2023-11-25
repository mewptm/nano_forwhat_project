import React from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './YesnoQuestion.css';

function Ynquiz13() {
  return (
    <div>
      <div className='Ynquiztion'>
        <h2> พฤติกรรมของคุณในช่วงระหว่างวันคือ นั่งเกือบทั้งวัน </h2>
        <Image
          width={500}
          height={500}
          src="/img/yn13.jpg"
        /><br />
        <div className="button-container">
          <Link to="/yesno_14">
            <Button className='yes-button'>ไม่</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
          <h4>&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h4>
          <Link to="/yesno_14"> {/* Changed the route for the "No" response */}
            <Button className='no-button'>ใช่</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/yesno_12">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ position: 'absolute', left: 300, top: 10, fontSize:'22px', width: '40px', height: '40px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  );
}

export default Ynquiz13;

import React from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Target() {
  return (
    <div className='Bmi1'>
      <h2>น้ำหนักเป้าหมายของคุณเท่าไหร่</h2>
      <br/>
      <div class="input-label">
        <input type="number" />
        <label htmlFor="target"> กก.</label>
      </div>
      <br />
      <p>โปรดป้อนค่าตั้งต้นตังแต่ 25 กก. ถึง 300 กก.</p>
      <br />
      <Image
          width={300}
          height={300}
          src="/img/10.jpg"
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
          <Link to="/Bmi">
           <Button className='next-button'>ถัดไป</Button> 
          </Link>
        </div>
        <div className='chevron-icon'>
          <Link to="/Height_1">
            <Button
              shape="circle"
              style={{ position: 'absolute', left: 100, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
    </div>
  );
}

export default Target;

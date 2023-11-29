import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_2() {
  return (
    <div>
         <div className='Bmi1'>
        <h2> ค่าดัชนีมวลกาย (BMI) </h2>
        <Image
          width={300}
          height={300}
          src="/img/10.jpg"
        /><br />
        <div className='child-bmi'>BMI  18.50 - 22.90</div>
        <div className='child-bmi'>อยู่ในเกณฑ์   น้ำหนักปกติ</div>
        <div className='child-bmi'>ภาวะเสี่ยงต่อโรค   เท่ากับคนปกติ</div>
        <br />

        <div >
          <Link to="/Advice_2">
            <Button className='advice-button'>คำแนะนำ</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        
        
        <Link to="/"> {/* Changed the route for the "No" response */}
            <Button className='next-button'>ถัดไป</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/Bmi">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ position: 'absolute', left: 300, top: 10, fontSize:'22px', width: '40px', height: '40px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>

      </div>
    </div>
  )
}

export default Bmi_2
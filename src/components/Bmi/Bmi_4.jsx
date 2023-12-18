import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
// import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Bmi_4() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> ค่าดัชนีมวลกาย (BMI) </h2>
        < Image className='ant-image-img'
          width="60%"
          src="/img/10.jpg"
        /><br />
        <div className='child-bmi'>BMI  25 - 29.90</div>
        <div className='child-bmi'>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 2</div>
        <div className='child-bmi'>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 2</div>
        <br />

        <div >
          <Link to="/Advice_4">
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
          style={{ left: 100, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  )
}

export default Bmi_4
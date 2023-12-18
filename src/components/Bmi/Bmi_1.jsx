import React from 'react'
import { Image, Button } from 'antd'; 
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
// import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Bmi_1() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> ค่าดัชนีมวลกาย (BMI) </h2>
        <br/>
        < Image className='ant-image-img'
          width="60%"
          src="/img/10.jpg"
        />
        <br />
        <div className='child-bmi'>BMI น้อยกว่า 18.50</div>
        <div className='child-bmi'>อยู่ในเกณฑ์ น้ำหนักน้อย/ผอม</div>
        <div className='child-bmi'>ภาวะเสี่ยงต่อโรค มากกว่าคนปกติ</div>
        <br />

        <div >
          <Link to="/Advice_1">
            <Button className='advice-button'>คำแนะนำ</Button> 
          </Link>
        
        
        <Link to="/Advice_1"> 
            <Button className='next-button'>ถัดไป</Button> 
          </Link>
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
     
    </div>
  )
}

export default Bmi_1
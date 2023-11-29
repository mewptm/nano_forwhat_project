import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Advice_2() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> คำแนะนำค่าดัชนีมวลกาย (BMI) </h2>
        
        <br />
        <div className='child-advice'>
        <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม </p>
        <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยในการ เสริมสร้างกล้ามเนื้อ หากต้องการเพิ่ม น้ำหนัก ให้ไม่ผอมจนเกินไป ให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
        <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
        </div>
        <br />

        <div >
          <Link to="/Bmi_2">
            <Button className='back-button'>ย้อยกลับ</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/Bmi_2">
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

export default Advice_2
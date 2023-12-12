import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Advice_4() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> คำแนะนำค่าดัชนีมวลกาย (BMI) </h2>
        
        <br />
        <div className='child-advice'>
        <p>1. ควบคุมปริมาณแคลอรี่ที่คุณบริโภคและ รับประทานอาหารที่มีสารอาหารครบถ้วน,รวมถึงผักผลไม้, โปรตีนคุณภาพสูง</p>
        <p>2. เพิ่มการออกกำลังกายในชีวิตประจำวัน เช่น การเดิน, วิ่ง,หรือการออกกำลังกาย อื่นๆ เพื่อช่วยเสริมสร้างกล้ามเนื้อ และเสริมสุขภาพทั่วไป</p>
        <p>3. รับประทานอาหารที่มีค่าโภชนาการ สมดุลเพิ่มการบริโภค ผักผลไม้, แป้งธัญพืชเต็มเม็ด, โปรตีนคุณภาพ และลดการบริโภคอาหารที่มีปริมาณ น้ำตาลและไขมันสูง</p>
        <p>4. สุขภาพจิตมีผลต่อสุขภาพร่างกายดังนั้นควรดูแลสุขภาพ จิตอย่างดี</p>
        <p>5. ควบคุมน้ำหนักอย่างรอบคอบให้ทำไป อย่างรอบคอบและทำตามคำแนะนำ จากนักโภชนาการหรือหมอ</p>
        </div>
        <br />

        <div >
          <Link to="/Bmi_4">
            <Button className='back-button'>ย้อนกลับ</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/Bmi_4">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{ position: 'absolute', left: 100, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
          icon={<VscChevronLeft />}
        />
      </Link>

      </div>
    </div>
  )
}

export default Advice_4
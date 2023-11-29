import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Advice_5() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> คำแนะนำค่าดัชนีมวลกาย (BMI) </h2>
        
        <br />
        <div className='child-advice'>
        <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
        <p>2. ลดการบริโภคอาหารที่มีความสูงใน โปรตีนที่ไม่ดีเช่นอาหารหมักหรืออาหาร จางๆ และหลีกเลี่ยงอาหารหรือเครื่องดื่ม ที่มีความสูงในน้ำตาลและไขมัน</p>
        <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนัก เพื่อลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
        <p>4. เลือกกินให้มากๆ ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล งด หรือหลีกเลี่ยงของทอด อาหารไขมันสูง</p>
        </div>
        <br />

        <div >
          <Link to="/Bmi_5">
            <Button className='back-button'>ย้อยกลับ</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/Bmi_5">
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

export default Advice_5
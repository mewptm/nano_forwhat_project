import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import './Bmi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Advice_3() {
  return (
    <div>
        <div className='Bmi1'>
        <h2> คำแนะนำค่าดัชนีมวลกาย (BMI) </h2>
        
        <br />
        <div className='child-advice'>
        <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
        <p>2. ออกกำลังกายอย่างสม่ำเสมอ อาจช่วย ลดน้ำหนักสร้างกล้ามเนื้อ และเพิ่มระดับ พลังงานในร่างกาย</p>
        <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนักเพื่อ ลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
        <p>4. การปรึกษากับหมอหรือโภชนาการจะ ช่วยในการกำหนดแผนการรักษาและการดูแลสุขภาพที่เหมาะสมสำหรับคุณ</p>
        <p>5. ความเครียดและข้อกังวลอาจมีผลต่อการควบคุมน้ำหนักและสุขภาพดังนั้นควร รักษาสุขภาพใจด้วยการปฏิบัติสิ่งที่ ทำให้คุณรู้สึกผ่อนคลาย</p>
        </div>
        <br />

        <div >
          <Link to="/Bmi_3">
            <Button className='back-button'>ย้อนกลับ</Button> {/* Changed button to Ant Design's Button component */}
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
      <Link to="/Bmi_3">
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

export default Advice_3
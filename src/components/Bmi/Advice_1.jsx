import React from 'react'
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from'./Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Advice_1() {
  return (
    <div>
        <div className={styles.Bmi1}>
        <h2> คำแนะนำค่าดัชนีมวลกาย (BMI) </h2>
        
        <br />
        <div className={styles.childadvice}>
        <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม</p>
        <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยใน การเสริมสร้างกล้าม เนื้อหากต้องการ เพิ่มน้ำหนัก ให้ไม่ผอมจนเกินไปให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
        <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
        </div>
        <br />

        <div >
          <Link to="/Bmi_1">
            <button className={styles.backbutton}>ย้อนกลับ</button> 
          </Link>
        </div>
      </div>
      <div className='chevron-icon'>
        <Link to="/Bmi_1">
        <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{right:270 , top: 10, fontSize: '22px', width: '50px', height: '50px' }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  )
}

export default Advice_1
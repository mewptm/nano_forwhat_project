import React from 'react';
import { Image, Button } from 'antd'; // Import Button component from Ant Design
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from'./Bmi.module.css';

function Target() {
  return (
    <div className={styles.Bmi1}>
      <h2>น้ำหนักเป้าหมายของคุณเท่าไหร่</h2>
      <br/>
      <div class="input-label">
        <input type="number" />
        <label htmlFor="target"> กก.</label>
      </div>
     
      <p>โปรดป้อนค่าตั้งต้นตังแต่ 25 กก. ถึง 300 กก.</p>
     
      <Image
          width={300}
          height={300}
          src="/img/t1.jpg"
        />
        <div>
        
          <Link to="/Bmi">
           <Button className={styles.nextbutton}>ถัดไป</Button> 
          </Link>
        </div>
        <div className='chevron-icon'>
          <Link to="/Height_1">
          <Button // Changed button to Ant Design's Button component
          shape="circle"
          style={{right:270 , top: 10, fontSize: '22px', width: '50px', height: '50px' }}
          icon={<VscChevronLeft />}
        />
      </Link>
      </div>
    </div>
  );
}

export default Target;

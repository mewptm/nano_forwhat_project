import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from'./Bmi.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Name() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=''>
      <div className={styles.Bmi1} >
        <h2>กรุณากรอกข้อมูลดังนี้</h2>
        <br />
        <div className='body '>
          <div className={styles.input}>
            <input type="text" placeholder="ชื่อ" />
          </div>

          <div className={styles.input} >
            <input type="text" placeholder="นามสกุล" />
          </div>

          <div className={styles.input}>
            <input type="number" placeholder="อายุ" />
          </div>

          <div className={styles.gender }>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="gender">เพศ</option>

              <option value="option2">ชาย</option>
              <option value="option3">หญิง</option>
            </select>
          </div>
        </div>

        <div>
          <Link to="/Bmi">
            <button className={styles.nextbutton}>ถัดไป</button>
          </Link>
        </div>
        <div className='chevron-icon'>
          <Link to="/Height_1">
            <Button
              shape="circle"
              style={{right:270 , top: 10, fontSize: '22px', width: '50px', height: '50px' }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Name;

import React, { useState } from 'react';
import styles from'./Bmi.module.css';
function Height(props) {
  const [height, setHeight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
    
      setHeight(value);
      // เรียก callback function ที่ถูกส่งมาจาก Component ที่เรียกใช้ Height
      props.onHeightChange(value);
    
  };

  return (
    <div className={styles.Bmi1}>
      <h2>ส่วนสูง (ซม.)</h2>
      <input
        type="number"
        value={height}
        onChange={handleInputChange}
      />
     
    </div>
  );
}

export default Height;

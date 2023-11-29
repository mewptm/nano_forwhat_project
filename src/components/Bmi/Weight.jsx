import React, { useState } from 'react';

function Weight(props) {
  const [weight, setweight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
    
      setweight(value);
      props.onWeightChange(value);
    
  };

  const handleSubmit = () => {
    // ส่วนนี้คุณสามารถใช้ค่า userWeight ที่เก็บไว้ในการทำต่อได้
    console.log('น้ำหนักที่ผู้ใช้ป้อน:', weight);
    // ทำอย่างอื่นต่อที่นี่ เช่น นำค่าไปยังหน้าถัดไป
  };

  return (
    <div className='Bmi1'>
      <h2>คำนวณค่าดัชนีมวลกาย (BMI)</h2>
      <br/><br/>

      <h2>น้ำหนักตัว (กก.)</h2>
      <input
        type="number"
        value={weight}
        onChange={handleInputChange}
      />
     
    </div>
  );
}

export default Weight;

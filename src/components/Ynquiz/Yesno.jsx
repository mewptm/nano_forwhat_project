import React, { useState } from 'react';
import './Yesno.css';
import { VscChevronLeft } from 'react-icons/vsc';


const yesno = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const images = ['/img/yn1.jpg', '/img/yn2.jpg', '/img/yn3.jpg',
                  '/img/yn4.jpg', '/img/yn5.jpg', '/img/yn6.jpg',
                  '/img/yn7.jpg', '/img/yn8.jpg', '/img/yn9.jpg',
                  '/img/yn10.jpg', '/img/yn11.jpg', '/img/yn12.jpg',
                  '/img/yn13.jpg', '/img/yn14.jpg', '/img/yn15.jpg',
                  '/img/yn16.jpg', '/img/yn17.jpg', '/img/yn18.jpg',
                  '/img/yn19.jpg', '/img/yn20.jpg', '/img/yn21.jpg',
                  '/img/cat.jpg', '/img/yn23.jpg', '/img/10.jpg',
                  '/img/yn25.jpg', '/img/yn26.jpg', '/img/10.jpg',
                  '/img/cat.jpg', '/img/10.jpg', '/img/cat2.jpg',]; // เพิ่ม URLs ของรูปภาพที่นี่

  const [questions] = useState([
                {
                id: 1,
                question: 'เป้าหมายที่คุณต้องการ ลดน้ำหนัก',
                },
                {
                id: 2,
                question: 'เป้าหมายที่คุณต้องการ ลดไขมัน',
                },
                {
                id: 3,
                question: 'เป้าหมายที่คุณต้องการ สุขภาพดี',
                },
                {
                id: 4,
                question: 'เป้าหมายที่คุณต้องการ เสริมสร้างกล้ามเนื้อ',
                },
                {
                id: 5,
                question: 'รูปร่างของคุณคือลักษณะ ผอมเพรียว',
                },
                {
                id: 6,
                question: 'รูปร่างของคุณคือลักษณะ สมส่วน',
                },
                {
                id: 7,
                question: 'รูปร่างของคุณคือลักษณะ อวบ',
                },
                {
                id: 8,
                question: 'รูปร่างของคุณคือลักษณะ อ้วน',
                },
                {
                id: 9,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ ก้น',
                },
                {
                id: 10,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ ต้นขา',
                },
                {
                id: 11,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ หน้าอก',
                },
                {
                id: 12,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ หน้าท้อง',
                },
                {
                id: 13,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ นั่งเกือบทั้งวัน',
                },
                {
                id: 14,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ ยืนเกือบทั้งวัน',
                },
                {
                id: 15,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ เดินเกือบทั้งวัน',
                },
                {
                id: 16,
                question: 'ลุกหรือเดินเพื่อยืดเส้นสายเกือบทั้งวัน',
                },
                {
                id: 17,
                question: 'คุณดื่มน้ำเปล่าวันละ 2-3 แก้ว/วัน',
                },
                {
                id: 18,
                question: 'คุณดื่มน้ำเปล่าวันละ 4-5 แก้ว/วัน',
                },
                {
                id: 19,
                question: 'คุณดื่มน้ำเปล่าวันละ 6-7 แก้ว/วัน',
                },
                {
                id: 20,
                question: 'คุณดื่มน้ำเปล่าวันละมากกว่า 8 แก้ว/วัน',
                },
                {
                id: 21,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มน้ำอัดลม',
                },
                {
                id: 22,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มเบียร์',
                },
                {
                id: 23,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบขนมหวาน',
                },
                {
                id: 24,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบกินของทอด',
                },
                {
                id: 25,
                question: 'คุณมีประสบปัญหาปวดหลัง',
                },
                {
                id: 26,
                question: 'คุณมีประสบปัญหาปวดเข่า',
                },
                {
                id: 27,
                question: 'คุณมีประสบปัญหาปวดแขน',
                },
                {
                id: 28,
                question: 'คุณมีประสบปัญหาปวดขา',
                },
                {
                id: 29,
                question: 'คุณมีประสบปัญหาปวดเอว',
                },
                {
                id: 30,
                question: 'คุณมีประสบปัญหาปวดข้อกระดูก',
                },
            ]);

  const handleYesClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setCurrentQuestionIndex(newIndex); // สำหรับตำแหน่งใน questions ให้เท่ากับตำแหน่งใน images
  };

  const handleNoClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setCurrentQuestionIndex(newIndex);
  };

  const handlePreviousClick = () => {
    const newIndex = currentQuestionIndex === 0 ? questions.length - 1 : currentQuestionIndex - 1;
    setCurrentImageIndex(newIndex);
    setCurrentQuestionIndex(newIndex);
  }; //ปุ่มย้อนกลับ

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

return (
  <div className='Ynquiztion'>
    <p className= 'question' style={buttonStyle}>{questions[currentQuestionIndex].question}</p>
    <img className='imgmedia'
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex + 1}`}
      style={{ width: '500px', height: '500px' }}
    />
    <div className='button-container'>
      
      <button className='no-button' style={buttonStyle} onClick={handleNoClick}>ไม่</button>
      <h1 className= 'and' style={{ ...buttonStyle, margin: '0 60px' }}>หรือ</h1>
      <button className='yes-button' style={buttonStyle} onClick={handleYesClick}>ใช่</button>
    </div>
    <div>
    <button className='chevron-icon' style={buttonStyle} onClick={handlePreviousClick}>
    <VscChevronLeft />{/* ไอคอนย้อนกลับ */}
    </button>
    </div>
  </div>
);
};

export default yesno;

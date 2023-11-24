import React from 'react'
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import './YesnoQuestion.css';
//import { useNavigate, Link } from 'react-router-dom';

function Ynquiz4 ()  { 
  // const navigate = useNavigate();
  return (
    <>
    <div className='Ynquiztion'>
    
    <h2> เป้าหมายที่คุณต้องการ เสริมสร้างกล้ามเนื้อ</h2>
      <Image 
        width={500}
        height={500}
        src="/img/yn4.jpg"
      /><br></br>
     
      <div className="button-container">
        <Link to="/yesno_5">
          <button className='yes-button' >ใช่</button>
        </Link>
          <h4>&nbsp; &nbsp; &nbsp; หรือ &nbsp; &nbsp; &nbsp;</h4>
        <Link to="/yesno_5">
          <button className='no-button' >ไม่</button>
        </Link>
      </div>
    </div>  
    </> 
  )
}

export default Ynquiz4;
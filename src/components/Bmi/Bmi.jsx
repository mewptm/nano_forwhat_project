import React, { useState } from 'react';
// import '../Bmi/Bmi.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from'./Bmi.module.css'
import Weight from './Weight';
import Height from './Height';
import Bmi_1 from './Bmi_1';
import Bmi_2 from './Bmi_2';
import Bmi_3 from './Bmi_3';
import Bmi_4 from './Bmi_4';
import Bmi_5 from './Bmi_5';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const calculateBmi = () => {
    const calculatedBmi = weight / ((height / 100) * (height / 100));
    setBmi(calculatedBmi);
    determinePage(calculatedBmi);
  };

  const determinePage = (calculatedBmi) => {
    if (calculatedBmi < 18.5) {
      setCurrentPage(1);
    } else if (calculatedBmi < 22.9) {
      setCurrentPage(2);
    } else if (calculatedBmi < 24.9) {
      setCurrentPage(3);
    } else if (calculatedBmi < 29.9) {
      setCurrentPage(4);
    } else if (calculatedBmi >= 29.9) {
      setCurrentPage(5);
    } else {
      setCurrentPage(0); // Default page if BMI doesn't fall into defined ranges
    }
  };

  const RenderBmiComponent = ({ bmiValue }) => {
    switch (currentPage) {
      case 1:
        return <Bmi_1 bmiValue={bmiValue} />;
      case 2:
        return <Bmi_2 bmiValue={bmiValue} />;
      case 3:
        return <Bmi_3 bmiValue={bmiValue} />;
      case 4:
        return <Bmi_4 bmiValue={bmiValue} />;
      case 5:
        return <Bmi_5 bmiValue={bmiValue} />;
      default:
        return (
          <div>
            <Weight onWeightChange={(value) => setWeight(value)} />
            <br/>
            <Height onHeightChange={(value) => setHeight(value)} />
            <button className={styles.bmibutton} onClick={calculateBmi}>คำนวณ BMI</button>
          </div>
        );
    }
  };
  
  const renderContent = () => {
    if (currentPage >= 1 && currentPage <= 5) {
      return <RenderBmiComponent bmiValue={bmi.toFixed(1)} />;
    } else {
      return (
      
        <div>
          
          <Weight onWeightChange={(value) => setWeight(value)} />
          <br />
          <Height onHeightChange={(value) => setHeight(value)} />
          <button className={styles.bmibutton} onClick={calculateBmi}>คำนวณ BMI</button>
         
          <div className='chevron-icon'>
          <Link to="/Target">
            <Button
              shape="circle"
              style={{right:285 , top: 10, fontSize: '22px', width: '50px', height: '50px' }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
          
        </div>
        
      );
      
    }
    
  };
  

  const checkBmiResult = (bmiValue) => {
    if (bmiValue === 0) return '-';
    if (bmiValue < 18.5) return 'อยู่ในเกณฑ์น้ำหนักน้อย / ผอม';
    if (bmiValue < 22.9) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)';
    if (bmiValue < 24.9) return 'อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1'
    if (bmiValue < 29.9) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
    if (bmiValue >= 29.9) return 'อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3'
  };

  // Define Page1 and Page2 components for navigation based on BMI result
  const Page1 = () => <div>Content for BMI less than 18.5</div>;
  const Page2 = () => <div>Content for BMI between 18.5 and 22.9</div>;
  const Page3 = () => <div>Content for BMI between 23 and 24.9</div>;
  const Page4 = () => <div>Content for BMI between 25 and 29.9</div>;
  const Page5 = () => <div>Content for BMI greater than 30</div>;
  

  return <div>{renderContent()}</div>;
  
}

export default Bmi;

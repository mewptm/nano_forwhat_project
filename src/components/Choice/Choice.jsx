import {Select} from 'antd';
import React from 'react';


const options  = [
    {
      label: 'โรคความดันโลหิตสูง',
      value: '1'
    },
    {
      label: 'โรคท้องผูก',
      value: '2'
    },
    {
      label: 'โรคมะเร็งลำไส้',
      value: '3' 
    },
    {
      label: 'โรคริดสีดวงทวาร',
      value: '4'  
    },
    {
      label: 'โรคหัวใจและหลอดเลือด',
      value: '5'  
    },
    {
      label: 'โรคลำไส้อุดตัน',
      value: '6'  
    },
    {
      label: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง',
      value: '7'  
    },
    {
      label: 'โรคเบาหวาน',
      value: '8'  
    },
    {
      label: 'โรคความดันตํ่า',
      value: '9'  
    },
    {
      label: 'โรคไขมันในเลือด',
      value: '10'  
    },
    {
      label: 'โรคกระเพาะ/กรดไหลย้อน',
      value: '11'  
    },
  ];

const handleChange = () => {
  console.log('selected ${value}');
};

const Choice = () => (
    <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select your answer"

    onChange={handleChange}
    optionLabelProp="label"
    options={options}    
  />
);


      


export default Choice;
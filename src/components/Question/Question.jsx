
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Choice from '../Choice/Choice';
import './Question.css';
import Ynquiz1 from '../yesnoQuestion/Ynquiz1';


const Question = () => {
 const questions = [
    { 
      id: 1,
	  question: 'อายุของคุณอยู่ช่วงไหน',
      options: ['อายุ 20-29 ปี',
	  			'อายุ 30-39 ปี',
				'อายุ 40-49 ปี',
				'อายุ 50+ ปี'],
    },
	{
		id: 2,
		question: 'เป้าหมายของคุณ',
		options: ['ลดนำ้หนัก',
				  'ลดไขมัน',
				  'สุขภาพที่ดี',
				  'เสริมสร้างกล้ามเนื้อ'],
	  },
	  {
		id: 3,
		question: 'รูปร่างของคุณ',
		options: ['ผอมเพรียว',
				  'สมส่วน',
				  'อวบ',
				  'อ้วน'],
	  },
	  {
		id: 4,
		question: 'ส่วนไหนในร่างกายของคุณที่ต้องการลดมากที่สุด',
		options: ['ก้น',
				  'ต้นขา',
				  'หน้าอก',
				  'หน้าท้อง'],
		},
		{
			id: 5,
			question: 'ความรู้เกี่ยวกับ IF ของคุณ',
			options: ['ไม่รู้อะไรเลย',
					  'พอรู้บ้าง',
					  'มีความรู้'],
		  },
		  {
			  id: 6,
			  question: 'คุณทานอาหารเช้าช่วงเวลาไหน',
			  options: ['ไม่รับประทานอาหารเช้า',
						'ระหว่าง 6.00 น. - 8.00 น.',
						'ระหว่าง 8.00 น. - 10.00 น.',
						'ระหว่าง 10.00 น. - 12.00 น.'],
			},
			{
			  id: 7,
			  question: 'คุณทานอาหารกลางวันช่วงเวลาไหน',
			  options: ['ไม่รับประทานอาหารกลางวัน',
						'ระหว่าง 10.00 น. - 12.00 น.',
						'ระหว่าง 12.00 น. - 14.00 น.',
						'ระหว่าง 14.00 น. - 16.00 น.'],
			},
			{
				id: 8,
				question: 'คุณทานอาหารเย็นช่วงไหน',
				options: ['ไม่รับประทานอาหารเย็น',
						  'ระหว่าง 16.00 น. - 18.00 น.',
						  'ระหว่าง 18.00 น. - 20.00 น.',
						  'ระหว่าง 20.00 น. - 22.00 น.'],
			  },
			  {
				id: 9,
				question: 'คุณออกกำลังกายบ่อยเเค่ไหน',
				options: ['ทุกวัน',
						  '2-3 ครั้ง/สัปดาห์',
						  'มากกว่าหนึ่งครั้ง/เดือน',
						  'ไม่ออกกำลังกายเลย'],
			  },
			  {
				  id: 10,
				  question: 'พฤติกรรมของคุณในช่วงระหว่างวัน',
				  options: ['นั่งเกือบทั้งวัน',
							'ยืนเกือบทั้งวัน',
							'เดินเกือบทั้งวัน',
							'ลุกหรือเดินเพื่อยืดเส้นยืดสายบ้าง'],
				},
				{
				  id: 11,
				  question: 'คุณนอนวันละกี่ชั่วโมง',
				  options: ['น้อยกว่า 5 ชั่วโมง',
							'5-6 ชั่วโมง',
							'7-8 ชั่วโมง',
							'มากกว่า 8 ชั่วโมง'],
				},
				{
					id: 12,
					question: 'คุณดื่มนํ้าวันละกี่แก้ว',
					options: ['2-3 แก้ว/วัน',
							  '4-5 แก้ว/วัน',
							  '6-7 แก้ว/วัน',
							  'มากกว่า 8 แก้ว/วัน'],
				  },
				  {
					  id: 13,
					  question: 'นิสัยแย่ๆ ของคุณ',
					  options: ['ชอบดื่มนํ้าอัดลม',
								'ชอบดื่มเบียร์',
								'ชอบขนมหวาน',
								'ชอบกินของทอด',
							   ],
					},
					{
						id: 14,
						question: 'ประสบปัญหาใดต่อต่อไปนี้',
						options: ['เจ็บหลัง',
								  'เจ็บเข่า',
								  'ไม่ใช่ทั้งหมด',
								  ],
					  },
					  {
						id: 15,
						question: 'โรคประจำตัวของคุณ',
						options: [<Choice/>],
					  },
					  {
						id: 16,
						question: 'คุณทานอาหารกลางวันช่วงเวลาไหน',
						options: ['ไม่รับประทานอาหารกลางวัน',
								  'ระหว่าง 10.00 น. - 12.00 น.',
								  'ระหว่าง 12.00 น. - 14.00 น.',
								  'ระหว่าง 14.00 น. - 16.00 น.'],
					  },
					  {
						  id: 17,
						  question: 'คุณทานอาหารเย็นช่วงไหน',
						  options: ['ไม่รับประทานอาหารเย็น',
									'ระหว่าง 16.00 น. - 18.00 น.',
									'ระหว่าง 18.00 น. - 20.00 น.',
									'ระหว่าง 20.00 น. - 22.00 น.'],
						},
		
		  
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
 

  const handleOptionSelect = (event, option) => {
    setSelectedOption(option);
    highlightButton(event.target);
  };

  function removeHighlight() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('highlight');
    }
  }
//   const highlightColor = () => {
// 	backgroundColor : isHighLighted ? 'red' : 'white'
//   }
  const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) { setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
	  removeHighlight();
    } else {
      setShowScore(true);
    }
  };

  function highlightButton(button) {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === button) {
        buttons[i].classList.add('highlight');
      } else {
        buttons[i].classList.remove('highlight');
      }
    }
  }

  return (
	<Content style={{ padding: '0 50px' }}>
	<Col span={12} offset={6}>
    <Col span={24} style={{ textAlign: 'center' }}>
        {showScore ? (
          <Row>
            <Col span={24}>
              <div className='question'>
                <Ynquiz1/>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={24}>
              <div className='question'>
                <h2>Question {currentQuestion + 1}</h2>
                <p>{questions[currentQuestion].question}</p>
              </div>
            </Col>
            <Col span={12} offset={6}>
              <div className='answer'>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} >
				  <button 
				    type="button"
                    className='answer-button'
                    onClick={(event) => {handleOptionSelect(event, option);}}
                    style={{ margin: '5px' } }
                  >
                    {option}
                  </button>
				  </div>
                ))}
              </div>
			  <Col span={12} offset={6}>
              <button className='next-button'
                onClick={handleNextQuestion} 
				disabled={!selectedOption}
				>
                    หน้าถัดไป
              </button>
			  </Col>
            </Col>
          </Row>
        )}
    </Col>
	</Col>
	</Content>
  );
};

export default Question;



import React, { useState } from 'react';
import { Row, Col} from 'antd';
import { Content } from 'antd/es/layout/layout';
import Choice from '../Choice/Choice';
import './Question.css';
import Ynquiz1 from '../yesnoQuestion/Ynquiz1';
import Choice2 from '../Choice/choice2';
import { useMediaQuery } from 'react-responsive';


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
			question: 'ความรู้เกี่ยวกับ IF ของคุณ',
			options: ['ไม่รู้อะไรเลย',
				'พอรู้บ้าง',
				'มีความรู้'],
		},
		{
			id: 3,
			question: 'คุณทานอาหารเช้าช่วงเวลาไหน',
			options: ['ไม่รับประทานอาหารเช้า',
				'ระหว่าง 6.00 น. - 8.00 น.',
				'ระหว่าง 8.00 น. - 10.00 น.',
				'ระหว่าง 10.00 น. - 12.00 น.'],
		},
		{
			id: 4,
			question: 'คุณทานอาหารกลางวันช่วงเวลาไหน',
			options: ['ไม่รับประทานอาหารกลางวัน',
				'ระหว่าง 10.00 น. - 12.00 น.',
				'ระหว่าง 12.00 น. - 14.00 น.',
				'ระหว่าง 14.00 น. - 16.00 น.'],
		},
		{
			id: 5,
			question: 'คุณทานอาหารเย็นช่วงไหน',
			options: ['ไม่รับประทานอาหารเย็น',
				'ระหว่าง 16.00 น. - 18.00 น.',
				'ระหว่าง 18.00 น. - 20.00 น.',
				'ระหว่าง 20.00 น. - 22.00 น.'],
		},
		{
			id: 6,
			question: 'คุณออกกำลังกายบ่อยเเค่ไหน',
			options: ['ทุกวัน',
				'2-3 ครั้ง/สัปดาห์',
				'มากกว่าหนึ่งครั้ง/เดือน',
				'ไม่ออกกำลังกายเลย'],
		},
		{
			id: 7,
			question: 'คุณนอนวันละกี่ชั่วโมง',
			options: ['น้อยกว่า 5 ชั่วโมง',
				'5-6 ชั่วโมง',
				'7-8 ชั่วโมง',
				'มากกว่า 8 ชั่วโมง'],
		},
		{
			id: 8,
			question: 'คูเคยควบคุมนํ้าหนักหรือไม่',
			options: ['เคย',
				'ไม่เคย'],
		},
		{
			id: 9,
			question: 'เป้าหมายในการลดนํ้าหนัก',
			options: ['ช้าเเต่มั่นคง',
				'ปานกลาง',
				'เร็วที่สุด'],
		},
		{
			id: 10,
			question: 'ข้อจำกัดด้านการทานอาหาร',
			options: [<Choice2 />],
		},
		{
			id: 11,
			question: 'โรคประจำตัวของคุณ (เลือกได้มากกว่า 1 ข้อ)',
			options: [<Choice />],
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

	const handleNextQuestion = () => {
		const isCorrect = selectedOption === questions[currentQuestion].answer;
		if (isCorrect) {
			setScore(score + 1);
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

	const handlePreviousQuestion = () => { /*ทำปุ่มย้อนกลับคำถาม */
		const prevQuestion = currentQuestion - 1;
		if (prevQuestion >= 0) {
			setCurrentQuestion(prevQuestion);
			setSelectedOption('');
			removeHighlight();
			setShowScore(false); // Set to false to show questions again if navigating back
		}
	};


	return (
			<div className='wrapper'> 
		  <Content style={{ padding: '0 50px' }}>
			<Col span={12} offset={6}>
				<Col span={24} style={{ textAlign: 'center' }}>
					<Col >
						{currentQuestion > 0 && (
							<button
								className='circular-button' // ปุ่มย้อนกลับ
								onClick={handlePreviousQuestion}
							>
								&lt;
							</button>
						)}
					</Col>
					{showScore ? (
						<Row>
							<Col >
								<div className='question'>
									<Ynquiz1 />
								</div>
							</Col>
						</Row>
					) : (
						<div >
							<div >
								<div className='question'>
									<h2>Question {currentQuestion + 1}</h2>
									<p>{questions[currentQuestion].question}</p>
								</div>
							</div>
							<Col span={24} >
								<div className='answer'>
  									{questions[currentQuestion].options.map((option, index) => (
    								<div key={index}>
      									<button
        								type="button"
        								className={`answer-button ${selectedOption === option ? 'highlight' : ''}`}
        								onClick={(event) => handleOptionSelect(event, option)}
       									style={{ margin: '25px' }}
      								>
        								{option}
      									</button>
    									</div>
  										))}
										</div>
								<div> 
									<button className='next-button'
										onClick={handleNextQuestion}
										disabled={!selectedOption}
									>
										หน้าถัดไป
									</button>
								</div>
							</Col>
						</div>
					)}
				</Col>
			</Col>
		</Content>
	</div>
	);
};

export default Question;


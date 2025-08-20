import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const name: string = '조영민';
const age: number = 24;
const isStudent: boolean = true;

// 배열
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ['apple', 'banana', 'orange'];

// 객체
const person: { name: string, age: number } = {
  name: '애플',
  age: 4
};

console.log(numbers);

function App() {
  // 변수들 선언
  const name: string = '조영민';
  const age: number = 24;
  const isStudent: boolean = true;

  const numbers: number[] = [1, 2, 3, 4, 5];
  const fruits: string[] = ['apple', 'banana', 'orange'];

  const person: { name: string; age: number } = {
    name: '애플',
    age: 4
  };

  return (
    <div>
      <h1>내 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>학생 여부: {isStudent ? '예' : '아니오'}</p>
      
      <h2>숫자 배열</h2>
      <p>{numbers.join(', ')}</p>
      
      <h2>과일 배열</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      
      <h2>사람 정보</h2>
      <p>이름: {person.name}</p>
      <p>나이: {person.age}</p>
    </div>
  );
}

export default App;

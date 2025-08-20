import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

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
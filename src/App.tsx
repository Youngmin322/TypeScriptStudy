import { useState } from 'react'
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '타입스크립트 공부하기', completed: false },
    { id: 2, text: 'SwiftUI 공부하기', completed: true },
    { id: 3, text: '프로젝트 만들기', completed: false }
  ]);

  const [inputText, setInputText] = useState<string>('');

  // TODO 추가 함수
  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText(''); // 입력창 초기화
    }
  };

  // TODO 완료/미완료 토글 함수
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // TODO 삭제 함수
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Enter 키 눌렀을 때 TODO 추가
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // 완료된 TODO 개수 계산
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 TODO List</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="새 할 일을 입력하세요..."
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginRight: '10px',
            width: '300px'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          추가
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>전체: {todos.length}개 | 완료: {completedCount}개 | 남은 일: {todos.length - completedCount}개</p>
      </div>

      <div>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>할 일이 없습니다!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                margin: '5px 0',
                backgroundColor: todo.completed ? '#f0f8f0' : '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: '10px' }}
              />
              
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#666' : '#000'
                }}
              >
                {todo.text}
              </span>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '5px 10px',
                  fontSize: '12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
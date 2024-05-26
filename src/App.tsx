import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, 증가, 감소, 더하기, 초기화 } from '.';

// 타입스크립트 (자바스크립트 + 타입명시)
let name : string;
let age: number;
let isStudent : boolean;
let hobbies : string[];
let role : (string | number)[];

type Person ={
  name:string,
  age?:number     // ?: 비워져있을 수도 있다
}
let person : Person = {
  name: 'peter',
  //age: 22
}

function App() : JSX.Element {

  let 박스 : JSX.Element = <div>박스</div>
  const 리덕스에서꺼내옴 = useSelector((state:RootState) => state)
  const dispatch : Dispatch = useDispatch()
  // 리덕스에서 state/변수 꺼내올려면ㄴ useSelector 사용
  // dispatch라는 키워드를 통해서 리듀서의 함수를 사용가능
  // 리듀서의 함수는 리덕스에 보관된 상태/변수를 수정하기 위해 제공


  return (
    <div className="App">
      <Profile name='홍길동' age="20"/>
      <p>{리덕스에서꺼내옴.리듀서1.user}입니다.</p>
      <p>{리덕스에서꺼내옴.리듀서1.count}입니다.</p>
      <button onClick={()=>{dispatch(증가())}}> 증가 </button>
      <button onClick={()=>{dispatch(감소())}}> 감소 </button>
      <button onClick={()=>{dispatch(더하기(3))}}> 더하기 </button>
      <button onClick={()=>{dispatch(초기화())}}> 초기화 </button>
    </div>
  );
}

export default App;

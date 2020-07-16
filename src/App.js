//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

//리액트 클래스형 컴포넌트
class App extends Component{
  render() {
    //name에 문자열이 아닌 값을 입력하면 렌더링은 되지만, 콘솔에 경고 메세지가 출력된다.
  return (
    <>
      <MyComponent name="react" fnum={7568}>즐거운 리액트</MyComponent>
      <Counter/>
      <Say/>
    </>
  );
  //위와 같은 형태로 MyComponent.js에서 export 한 것을 사용할 수 있다.
  }
}


export default App;
//App 이라는 컴포넌트를 만들어준다.
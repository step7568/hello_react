//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

//리액트 클래스형 컴포넌트
class App extends Component{
  render() {
    
  return (
    <>
      {/* *컴포넌트에도 ref를 사용할 수 있다.
      <ValidationSample
        ref={(ref)=>{this.ValidationSample=ref}}/> */}

        <ScrollBox ref={(ref => this.ScrollBox=ref)}/>
        <button onClick={() => this.ScrollBox.scrollBottom()}>
          맨 밑으로 가기
        </button>
        {/**문법상 onClick={this.scrollBox.scrollBottom()} 이 잘못된 것은 아니나,
         * 컴포넌트가 처음 렌더링될 때, 값이 undefined 라서 값을 읽어오는 과정에서
         * 오류가 난다. 그래서 화살표 함수를 사용하여 버튼을 누를때 실행되게 해주자
         */}
    </>
  );
  
  }
}


export default App;
//App 이라는 컴포넌트를 만들어준다.
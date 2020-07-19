//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
//import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
function getRamdomColor() {
  //색상이 16진법으로 되어 있으니 랜덤한 수를 16진법으로 변환한다.
  //16777215는 16진법으로 ffffff 이다.
  return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

//리액트 클래스형 컴포넌트
class App extends Component{
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRamdomColor()
    });
  }

  render() {
    
  return (
    <>
      <button onClick={this.handleClick}>랜덤 색상</button>
      <ErrorBoundary>
      <LifeCycleSample color={this.state.color}/>
      </ErrorBoundary>
    </>
  );
  
  }
}


export default App;
//App 이라는 컴포넌트를 만들어준다.
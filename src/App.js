import React from 'react';
//리액트를 불러와서 사용할 수 있게 해줌
//후에 홈페이지를 빌드할 떄 웹팩으로 불러온 파일들을 하나로 합쳐서 빌드해줌
//import logo from './logo.svg';
import './App.css';
//위와 같이 파일을 불러오는 모듈을 '로더' 라고 한다.

function App() {
  const name = "리액트";
  const name1 = undefined;
  const num = 0;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '16', //단위 생략시 px로 지정된다.
  }
  return ( //밑의 코드는 JSX 문법
    //JSX는 사용할 때 유의점이 있는데, 두개 이상의 태그를 사용할 때 부모 요소로 감싸주어야 함
    <> {/**이 기능을 fragment 라고 함  리액트 버전 16이상에서만 사용가능*/} 
      {name==="리액트"? <h1>안녕 {name}</h1> : <h1>안녕 {name}</h1>}
      {/**if문을 대체하여 삼항연산자를 사용하자! */}
      <h1>안녕 {name}</h1>

      {/**AND 연산자 (조건부 렌더링) 
       * 리액트에서 조건부 렌더링이 가능한 이유는 false를 렌더링할 때는 null을 
       * 렌더링 하는 것과 마찬가지이기 때문, 하지만 0은 예외로 화면에 0이 표시된다.
      */}
      {name==="리액트" && <h1>저는 리액트입니다!</h1>}
      {num && <h1>0인데 화면이 표시가 되네??</h1> /**내용이 없어지고 0만 표시된다. */}

      {/**undefined를 렌더링하지 않기
       * 함수에서 리턴할 때 undefined를 리턴하면 오류가 난다. 하지만 JSX내부에서는 괜찮다.
       * 읽어올 값이 undefined의 가능성을 내포하고 있다면 OR 연산자를 사용하자
       */}
      {name1 || "undefined 인데요?"}

      {/**인라인 스타일링
       * DOM에 스타일을 적용할 때는 문자열이 아닌 객체 형태로 사용해야 한다.
       * 또한 스타일 이름중에서 카멜 표기법을 사용하지 않은 이름은 카멜 표기법으로 바꿔야 함
       * ex: background-Color => backgroundColor
       */}

      <h2 style={style}>리액트가 응답코드 200을 반환합니다!!</h2>
      <h2 style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: '16',
      }}
      >
        {name}</h2>
        {/**위와 같은 형태가 인라인 스타일링이다. */}

        {/**class -> className 
         * HTML에서는 class를 사용했지만, JSX에서는 className을 사용한다.
         * 리액트 v16부터는 class라고 사용해도 브라우저에서 알아서 변환시켜주지만
         * 브라우저 콘솔에서 경고 메세지를 날린다.
        */}
        <h1 className="react">CSS로 적용한 스타일</h1>

        {/**꼭 닫아야하는 태그
         * HTML에서는 태그를 꼭 안닫아줘도 실행되는 태그가 몇 있는데
         * JSX에서는 태그를 무조건 닫아줘야 한다!!
         */}
         <h1 className="react">self-closing Test</h1>
         <input/> {/**내용이 없는 경우 태그를 열고 바로 닫아도 된다. -> self-closing */}

    </>
  );
}

export default App;
//App 이라는 컴포넌트를 만들어준다.
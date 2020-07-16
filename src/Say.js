import React, { useState } from "react";
//함수형 컴포넌트에서의 state 사용 => useState

//배열 비구조화 할당
// const array = [1,2];


// const one = array[0];
// const two = array[1];
// 위의 코드를 배열 비구조화 할당으로 바꿔보면

// //한줄로 쓸 수 있다. 
// const [one, two] = array;


const Say = () => {
    //클래스형 컴포넌트에서 state에는 무조건 객체형태로 초기화를 해줘야 했지만
    //useState에서는 어떤 값으로 초기화를 해도 상관없다.
    //함수를 호출하면 배열을 리턴하는데, 첫번째 값은 현재 값이고, 두번째 값은 상태를 변경해주는
    //함수이다. (get, set)등등, 배열 비구조화 할당을 통해 값을 바꾸어 줄 수 있다.
    const [Message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("안녕히가세여");
    //useState는 여러개를 사용할 수도 있다.
    const [color, setColor] = useState("black");
    return (
       <div>
           <button onClick={onClickEnter}>입장</button>
           <button onClick={onClickLeave}>퇴장</button>
           <h1 style = {{color}}>{Message}</h1>

        {/**DOM 요소에만 이벤트를 걸 수 있다. */}
           <button style={{ color: 'red'}} onClick={()=>setColor('red')}>빨강이 좋겠군</button>
           <button style={{ color: 'green'}} onClick={()=>setColor('green')}>초록이 좋겠군</button>
           <button style={{ color: 'blue'}} onClick={()=>setColor('blue')}>파랑이 좋겠군</button>
       </div>
    );
    //state 사용시 주의사항
    //state에 값을 집어넣어야 할 때, setState, useState를 통해서만 값을 넣을 수 있다.
};

export default Say;
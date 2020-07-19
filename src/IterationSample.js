import React, { useState } from 'react';

const IterationSample = () => {
    //map 함수 문법
    /**
     * arr.map(CB, [this.arg]);
     * callback : 
     *      currentValue : 현재 처리하는 요소
     *      index : 현재 처리하고 있는 요소의 인덱스
     *      array : 현재 처리하고 있는 원본 배열
     * 
     * this.arg : 콜백에서 사용할 this.레퍼런스
     */
    //데이터 배열을 컴포넌트 배열로 반환하기
    // const names = ["눈사람", "얼음", "눈", "바람"];
    // const nameList = names.map((name,index) => <li key={index}>{name}</li>)

    const [names, setNames] = useState([
        {id:1, text: '이순신'},
        {id:2, text: '박문수'},
        {id:3, text: '문수파크'},
        {id:4, text: '최순신'},
    ]);
    const [inputText, setInputText] = useState(''); 
    const [nextId, setNextId] = useState(5); //새로운 아이디를 추가할 때 사용될 5
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        //concat 함수는 배열의 내장 함수이고 해당 배열에 새로운 항목을 추가할 때 사용함
        //배열에 추가하는 함수는 두가지가 있는데 concat과 push 이다.
        //push는 기존 배열을 변경하고, concat은 기존 배열을 토대로 새로운 배열을 만들어준다.
        //리액트에서는 상태를 업데이트할 때 기존 상태를 그대로 두고 새로운 값을 상태로 설정해야함
        //이것을 불변성 유지라고 한다.
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
        
    };
    // //배열에서 특정 항목을 지울떄는 filter 라는 함수를 사용한다.
    // const number = [1,2,3,4,5];
    // const bb = number.filter(number => number < 3);
    // 결과 : 1, 2
    // filter 함수의 인자에 분류하고 싶은 조건을 함수로 넣어주면 쉽게 분류할 수 있다.
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map(name => <li key={name.id} 
        onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>);
    return (
        //반복이 되는 코드가 있다.
        //js map 함수를 사용하면 보다 간편하게 처리하고 관리할 수 있다.
        <div>
            {/* <ul>
                <li>눈사람</li>
                <li>얼음</li>
                <li>눈</li>
                <li>바람</li>
            </ul> */}
            {/**콘솔창에 key props가 없다고 오류를 낸다. 
             * key는 컴포넌트 배열 렌더링시 어떤 원소에 변동이 있었는지 확인하는 용도로 사용함
             * 그 키값은 유일해야 한다. PK. 
             * 그래서 고유한 값인 index를 사용하면 되긴 하지만, 이것은 
             * 배열의 데이터에 고유한 값이 없을 경우에만 사용한다. 왜냐하면
             * 인덱스로 리렌더링하면 배열이 변경될 때 효율적이지 못하기 떄문이다.
            */}
            <input
                value ={inputText}
                onChange={onChange}
                />
            <button onClick={onClick}>확인</button> 
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;
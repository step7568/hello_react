import React, { useState, useEffect } from 'react';

const Info = () => {
    //useState 여러번 사용하기
    //하나의 useState 함수는 하나의 상태만 관리 가능
    // 여러개를 쓰면 여러개의 상태를 관리할 수 있다.
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    //useEffect
    //컴포넌트가 리렌더링 될 때마다 특정 작업을 수행하도록 설정가능
    //클래스 컴포넌트의 componentDidMount + componentDidUpdate
    //해당 함수가 마운트될 떄만 실행하고 싶다면 두번째 인자로 []을 넣어주면 된다.
    //특정 값이 업데이트 될 때 사용할 수도 있다. 두번째 인자인 배열에 검사하고 싶은 값 넣어주자
    
    // useEffect(() => {
        //     console.log('렌더링 완료');
        //     console.log(name);
        //     // console.log({
        //     //     name,
        //     //     nickname,
        //     // });
        // }, [name]);
            
    //언마운트 되기 전 또는 업데이트 직전에 사용할 수도 있다. => 뒷정리함수 리턴해줌
    //언마운트 될 때마다 사용하고 싶다면 위와 마찬가지로 두번쨰 인자에 [] 넣어주면 된다.
    useEffect(()=>{
        console.log('렌더링 진행');
        console.log(name);
        return() => {
            console.log('난 뒷정리하고 갈게');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>    
        </div>
        <div>
            <b>이름 : {name}</b>
        </div>
        <div>
            <b>닉네임 : {nickname}</b>
        </div>
        </>
    );
};

export default Info;
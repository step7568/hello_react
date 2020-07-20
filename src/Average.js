import React, { useState, useMemo, useCallback, useRef } from 'react';

//useMemo
//컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음
const getAverage = num => {
    console.log('평균값 계산하기');
    if(num.length === 0) return 0;
    const sum = num.reduce((a, b) => a+b);
    return sum / num.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    //useRef
    const inputEl = useRef(null);

    //useCallback을 사용하지 않으면 컴포넌트가 렌더링 될 때마다 함수가 새로 생성된다.
    //컴포넌트의 렌더링이 자주 발생하거나, 렌더링해야할 컴포넌트의 갯수가 많아지면 
    //useCallback을 이용하여 최적화하자
    //useCallback의 첫번째 파라미터에는 생성하고 싶은 함수, 2번째에는 배열을 넣으면 된다.
    //이 배열에는 어떤 값이 바뀔때 함수를 새로 생성해야 하는지 명시해야함
    //비어 있는 배열을 넣게되면 컴포넌트가 렌더링될 때 딱 한번만 생성된다.
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); //num, list가 바뀔 때에만 함수를 생성한다.

    //리스트 배열이 바뀔때만 getAverage 호출
    const avg = useMemo(()=>getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;
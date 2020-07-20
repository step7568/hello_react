import React, { useState, useReducer } from 'react';

//useReducer
//컴포넌트 상황에 따라 다른 상태로 업데이트 할 때 사용하는 hook
//현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태 반환함
//리듀서 함수에서 새로운 상태를 만들 때에는 반드시 불변성을 지켜줘야함
function reducer(state, action) {
switch(action.type) {
        case 'INCREMENT': 
        return {value: state.value + 1};
        case 'DECREMENT': 
        return {value: state.value -1 };
        default:
            return state;
    }
}
//Hooks는 v16.8에서 업데이트 되어서 클래스에서만 사용할 수 있던 상태관리 함수를
//함수형 컴포넌트에서도 사용할 수 있게 해준다.
const HooksTest = () => {
    //useState 사용시 () 괄호 안에 들어가는 것은 해당 값의 초기값 설정해주는 것
    //해당 함수가 호출되면 배열을 반환하고, 1번 원소는 값, 2번 원소는 값 설정해주는 함수이다.
    //2번 원소(함수)에 파라미터를 넣어 호출하면 1번 원소의 값이 바뀌고 리렌더링 된다.
    // const [num, setNum] = useState(0);
    // return (
    //     <div>
    //         <h1>현재 카운터 값 : {num}</h1>
    //         <button onClick={()=> { setNum(num + 1)}}>+1</button>
    //         <button onClick={()=> { setNum(num - 1)}}>-1</button>
    //     </div>
    // );
    
    //useReducer의 첫번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는
    //해당 리듀서의 기본값을 넣어준다. 해당 Hook을 사용하면 state와 dispatch를 받아오는데
    //state는 현재 상태이고, dispatch는 액션을 발생시키는 함수이다.
    //dispatch 함수 안에 액션 값을 넣어주면 해당 액션을 발생시키는 구조
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <h1>현재 카운터 값 : {state.value}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default HooksTest;
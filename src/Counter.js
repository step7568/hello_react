import React, { Component } from 'react';

class Counter extends Component{
    //컴포넌트의 생성자 메서드.
    //클래스형 컴포넌트에서 생성자를 작성할 떄에는 반드시 super(props)를 호출해줘야 한다.
    // constructor(props){
    //     super(props);
    //     //super 함수가 호출되면 현재 컴포넌트가 상속받고 있는 리액트의 컴포넌트 클래스가 지닌
    //     //생성자 함수를 호출해준다.

    //     //state의 초기값 설정
    //     //컴포넌트의 state는 객체형식이어야함
    //     //객체형태인 state 안에는 여러개의 값이 있을 수 있다.
    //     this.state = {
    //         number: 0,
    //         fnum: 0,
    //     };
    //     //state의 초기값을 지정해주기 위해 생성자를 선언했었는데 
    //     //다른 방식으로도 state의 초기값을 지정해 줄 수 있다.

    // }

    state = {
        number:0,
        fnum: 0,
    };
    //state란 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. 
    //props는 부모 컴포넌트가 설정하는 값이고 자식 컴포넌트에서 변경이 불가능 한데,
    //state는 가능하다.
    //state에는 두가지 종류가 있는데, 클래스형 컴포넌트의 state와
    //함수형 컴포넌트의 useState이다.
    render() {
        //state를 조회할 떄는 this.state로 한다.
        const {number, fnum} = this.state;
        return(
            <div>
                <h2>이건 안바뀌어요 {fnum}</h2>
                <h1>{number}</h1>
                <button onClick={()=>{
                    // onClick을 통해 버튼이 클릭됐을 때 이벤트를 설정가능하다.
                    //this.setState를 통해 state를 변경할 수 있다.
                    this.setState((prevState) => {
                        return{
                            number: prevState.number+1,
                        };
                    });
                    //state가 업데이트 될 때에는 비동기적으로 업데이트 되는데
                    //이때 setState를 두번 쓰면 +2가 되야 하지만 +1만 된다.
                    //이에 대한 해결책으로 setState의 인자로 객체말고 함수를 넣어주면 된다.
                    this.setState((prevState) =>{
                        return {
                            number: prevState.number+1,
                        };
                    }, ()=>{
                        //setState가 실행되고 난 후 특정작업을 하고 싶을땐 
                        //두번째 인자 callback을 등록하여 사용할 수 있다.
                        console.log("리액트가 +2를 원함!");
                        console.log(this.state);
                    });
                }}>+2</button>
            </div>
        );
    }
}

export default Counter;
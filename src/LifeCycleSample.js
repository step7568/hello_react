import React, { Component } from 'react';
//라이프사이클 메서드는 총 3가지로 나뉘는데 마운트, 업데이트, 언마운트로 나뉜다.
//해당 메서드들은 컴포넌트 안에서 오버라이딩하여 사용할 수 있다.
//접두사로 will이 붙은 것은 해당 작업이 실행되기 전에 실행되는 메서드
//접두사로 Did가 붙은 것은 해당 작업이 완료된 후 실행되는 메서드이다.
class LifeCycleSample extends Component {
    //마운트 : DOM이 생성되고 웹에 나타나는 것을 마운트라고 함
    //이때 호출되는 메서드 :
    //constructor : 생성자
    // getDevidedStateFromProps : props의 값을 state에 넣을 때 사용하는 메서드
    // render : 우리가 만든 UI를 렌더링하는 메서드
    // componentDidMount : 컴포넌트가 웹에 나타난 후 실행되는 메서드
    
    state = {
        num: 0,
        color: null,
    }
    myRef = null;
    
    //constructor : 생성자
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    
    // getDevidedStateFromProps : props의 값을 state에 넣을 때 사용하는 메서드
    static getDevidedStateFromProps(nextProps, prevProps) {
        console.log('getDividedStateFromProps');
        if(nextProps.color !== prevProps.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    // componentDidMount : 컴포넌트가 웹에 나타난 후 실행되는 메서드
    // 해당 함수 안에서 다른 라이브러리 또는 프레임웍의 함수를 호출하거나
    // 이벤트 등록, 비동기처리, 네트워크 요청같은 작업을 처리한다.
    componentDidMount() {
        console.log('componentDidMount');
    }

    //업데이트의 경우 다음과 같은 경우 업데이트함, 
    /** props가 바뀔 떄
     *  state가 바뀔 때
     *  부모 컴포넌트가 re - rendering 될 때
     *  this.forceUpdate로 강제로 렌더링을 트리거 할 때
     */ 
    //컴포넌트가 리렌더링을 해야 하는지 결정하는 메서드이고 
    //getDevidedStateFromProps 다음에 실행되는 메서드로 해당 메서드에서 
    //true 반환시 render를 호출하고 false 반환시 이 메서드에서 작업이 종료된다.
    //하지만 this.forceUpdate를 호출하는 함수가 있다면 이 과정을 무시한다.
    //값을 따로 설정하지 않으면 true를 자동으로 반환하고, props, state는 this로 접근
    //새로 설정될 props, state에는 next로 접근한다. nextProps, nextState
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.num % 10 !== 4;
    }

    //컴포넌트가 웹에서 사라지기 전에 실행되는 메서드
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            num: this.state.num + 1
        });
    }
    //컴포넌트 변화를 DOM에 반영하기 전에 실행되는 메서드
    //리액트 v16.3 이후부터 사용가능, 해당 메서드에서 반환하는 값은 
    // component Did Update의 3번째 파라미터에서 전달받을 수 있다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }

        return null;
    }
    //컴포넌트의 업데이트 작업이 끝난 후 실행되는 메서드
    //1번쨰 2번째 파라미터로 업데이트 전의 데이터를 받을 수 있고
    //3번째 파라미터로 snapshot 값을 전달받을 수 있다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log("업데이트 되기 전 색", snapshot);
        }
    }

    // render : 우리가 만든 UI를 렌더링하는 메서드
    // 컴포넌트를 보여주고 싶지 않다면 false 나 null을 반환해라
    // 해당 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안된다.
    // 브라우저의 DOM에도 접근하면 안되고, DOM 정보를 가져오거나, state를 사용하려면
    // componentDidMount에서 처리해야함
    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };
        return(
            <div>
                {/** 의도적인 오류이다
                 * 만약 오류가 났을 때 사용자에게 에러가 발생한 것을 알려줘야함*/}
            {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.num}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
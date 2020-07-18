import React, { Component } from 'react';

class RefSample extends Component{
    //리액트 버전 16부터 사용가능
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }
    //컴포넌트에서 DOM에 직접 접근해야 할 때에는 ref를 사용합니다.
    //ref를 사용하지 않아도 원하는 기능을 구현할 수 있다면 그걸 먼저 해보고
    //안될것 같다 싶으면 ref를 이용하자.
    render() {
        return(
            <div>
                <input ref={this.input}/>
            </div>
        )
    }
}

export default RefSample;
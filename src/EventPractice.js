import React, {Component }from 'react';

class EventPractice extends Component{
    state = {
        username: '',
        message: '',
    }
    //함수호출시 this가 호출부에 따라 결정되는데 임의 메서드가 HTML의 요소로 등록되는 과정에서
    //메서드와 this의 관계가 끊어지는데, 이때 메서드를 this와 바인딩하는 작업이 필요하다.
    //바인딩은 생성자에서 해주는게 정석이지만 너무 귀찮다.
    //이것을 대신할 수 있는 방법은 바벨의 Property init Syntax 문법을 사용하면  된다.
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    //개발자가 임의로 이벤트 처리할 떄 실행할 메서드를 만들 수 있다
        // handleClick() {
        //     alert(this.state.message);
        //     this.setState({
        //         message:'',
        //     });
        // }
    //Property init Syntax
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    //객체 안에서 키값을 []로 감싸면, 그 안에 넣은 레퍼런스가 가르키는 값이 키값으로 사용된다.

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username: '',
            message:'',
        });
    }

    //특정 키를 눌렀을 때 반응하는 이벤트 onKeyPress
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return(
            <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="입력해여"
                value={this.state.username}
                onChange={this.handleChange
                    // (e)=>{
                    //     console.log(e.target.value);
                    //     //이벤트가 끝나고 나면 자동으로 e 객체는 초기화된다.
                    //     //비동기적으로 이벤트를 참조할 땐, e.persist() 함수를 이용하자
                    //     //e.target.value는 값이 바뀔때마다 바뀌는 값을 체크할 수 있다.
                    //     this.setState({
                    //         message: e.target.value
                    //     })    

                    // }
                }
            />
            <input
                type="text"
                name="message"
                placeholder="입력해여"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                {/**버튼을 클릭했을 때 현재 텍스트에 쓰여 있는 메세지 출력하고
                 * 텍스트창을 초기화해준다.
                 */}
                <button onClick={this.handleClick
                    // ()=>{
                    // alert(this.state.message);
                    // this.setState({
                    //     message:'',
                    // });
                // }
            }>확인</button>
            </>
        );
    }
}

export default EventPractice;
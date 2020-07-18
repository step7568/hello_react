import React, {Component} from 'react';
import './ValidationSample.css';


class ValidationSample extends Component{
    state = {
        password: '',
        clicked: false,
        validated: false,
    }
    //인풋태그에서 onChange 이벤트가 발생하면 패스워드를 인풋에 입력한 텍스트로 바꿔줌
    handleChange= (e) => {
        this.setState({
            password: e.target.value,
        });
    }
    //validated 가 입력한 패스워드가 0000인지 비교하여 true, false가 된다.
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        //버튼 클릭 이벤트가 발생한 후 해당 인풋태그에 포커스
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input
                ref={(ref) => this.input=ref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? 
                    (this.state.validated ? 'success' : 'failure') : ''}
                />
                {/**인풋의 CSS는 클릭을 누르기 전에는 색이 없고 클릭했을 때 
                 * 초록색 및 빨강으로 바뀜 */}
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
            //ref를 사용해야 할 때 
            //특정 input에 포커스 주기, 스크롤 박스 조작, canvas 요소에 그림 그리기
            
        )
    }
}

export default ValidationSample;
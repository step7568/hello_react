import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollBottom = () => {
        const { scrollHeight, clientHeight} = this.box;
        /**
         * 위 구문은 
         * const scrollHeight = this.box.scrollHeight;
         * const scrollclient = this.box.clientHeight;
         * 과 동일하다 (비구조화 할당)
         */
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    //위와 같은 형태로 만들어놓으면 다른 컴포넌트에서 
    //import 했을때 ref를 이용하여 사용할 수 있다.
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            backGround: 'linear-gradient(white, black)',
        }

        return(
            <div
                style={style}
                ref={(ref)=>this.box=ref}>
                    <div style={innerStyle}/>

            </div>    
        )
    }
    // {/* *컴포넌트에도 ref를 사용할 수 있다.
    //   <ValidationSample
    //     ref={(ref)=>{this.ValidationSample=ref}}/> */}

    //     {/* <ScrollBox ref={(ref => this.ScrollBox=ref)}/>
    //     <button onClick={() => this.ScrollBox.scrollBottom()}>
    //       맨 밑으로 가기
    //     </button> */}
    //     {/**문법상 onClick={this.scrollBox.scrollBottom()} 이 잘못된 것은 아니나,
    //      * 컴포넌트가 처음 렌더링될 때, 값이 undefined 라서 값을 읽어오는 과정에서
    //      * 오류가 난다. 그래서 화살표 함수를 사용하여 버튼을 누를때 실행되게 해주자
    //      */
}



export default ScrollBox;
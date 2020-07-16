import React from 'react';
import propTypes from 'prop-types';
//컴포넌트의 필수 props를 지정하거나, props의 타입을 지정할 때 사용한다. propTypes

//화살표 함수를 이용한 함수형 컴포넌트 생성
//VScode 툴 중에 react snippet 를 이용하여
//rsc 를 입력한 후 엔터를 입력하면 바로 함수형 컴포넌트가 생성된다.
const MyComponent = ({name, children, fnum})=>{
    //props는 컴포넌트 속성을 표현할 때 사용함
    //props는 값을 해당 컴포넌트로 불러와 사용하고, 부모 컴포넌트에서 설정가능하다.

    //const {name, children} = props; 
    //비구조화 할당 공통된 요소를 뽑아 이런 형태로 처리하자
    return (
        <>
        {/* <div>
            안녕하세요 나의 이름은 {props.name}입니다.<br/>
            children 값은 {props.children} 입니다.
        </div>   */}
        {/**비구조화 할당으로 밑의 형식으로 사용가능하다. */}
        <div>
            안녕하세요 나의 이름은 {name} 입니다.<br/>
            children 값은 {children} 입니다. <br/>
            제가 좋아하는 숫자는 {fnum} 입니다.<br/>
        </div>  
        </>
        
    );
    //Props.children은 컴포넌트 태그 사이의 내용을 보여준다.
};
//props의 기본 값을 정해줄 수 있다.
MyComponent.defaultProps = {
    name: "포인터",
};

//이런 형태로 defaultProps랑 같은 형태로 사용하고, name을 무조건 문자열로 전달해야 한다는 것
MyComponent.propTypes = {
    name: propTypes.string,
    fnum: propTypes.number.isRequired,
    //위의 isRequired는 fnum을 지정해주지 않았을때 경고를 띄우게 하는 것이다.
    /**
     * proptypes에는 여러가지 종류를 설정할 수 있는데
     * array, boolean, function, number, object, string, symbol
     * node(렌더링 할 수 있는 모든 것), instanceOf, any(아무거나) 등등
     */
};
export default MyComponent;
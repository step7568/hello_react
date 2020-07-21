import React from 'react';
import styled, {css} from 'styled-components';
//styled component는 하나의 js파일 안에 스타일을 선언하는 방식으로 사용한다.
//vscode의 styled component 플러그인이 설치되어 있지 않다면 
//설치해서 사용하는 것이 편하다, 
//설치하지 않으면 문자열이 하이라이팅이 안되어서 보기 좀 힘들다.
//props를 사용하지 않는 경우 css를 import하지 않고 사용해도 되지만, 하이라이팅이 되지 않는다.
const sizes = {
    desktop: 1024,
    tablet: 768,
};
//위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어준다.
//styled component 메뉴얼에서 유틸함수 사용법을 제공하고 있음
//실제로 사용할 땐 따로 js파일로 export해서 사용하면 될듯하다.
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
    }
    `;
    return acc;
}, []);

const Box = styled.div`
    /**아래와 같은 형태로 props로 색을 전달한 경우에는 JSX 문법 내부에서 props로 색을 설정해줄 수 있다. */
    background: ${props=>props.color || 'blue'};
    padding: 1rem;
    display: flex;
/**styled component 반응형 웹 */
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
    /*
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    } */
`;
//아래와 같이 ` ` 안에 스타일을 기입하는 것을 tagged 템플릿 리터럴이라고 한다.
//tagged 템플릿 리터럴을 사용하면 js 함수나 배열에 들어가는 값을 그대로 사용할 수 있다.

//스타일링된 엘리먼트를 만들때에는 styled 컴포넌트를 import하고, styled.[태그명]을 사용하여 구현한다.
//사용해야 하는 태그명이 유동적이라면 styled([태그타입])`background: black`; 이런 형태로 사용가능하다.
const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    /* &문자를 이용하여 자기 자신을 선택할 수 있다.*/
    &:hover {
        background: rgba(255,255,255,0.9);
    }
    /* inverted가 true일때 특정 스타일 부여*/
    ${props => 
    props.inverted && 
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover{
                background: white;
                color: black;
            }
        `}
    & + button {
        margin-left: 1rem;
    }
`;
const StyledComponent =  () => {
    return (
        <Box color='black'>
            <Button>안녕하세요</Button>
            {/**아래와 같이 props를 이용하여 조건부 스타일 적용이 가능하다. */}
            <Button inverted={true}>테두리만</Button>
        </Box>
    );
}

export default StyledComponent;
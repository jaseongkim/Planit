## 투두작성을 통해 목표를 달성할 수 있게 도와주는 서비스
PLANIT은 계획을 뜻하는 PLAN 과 행성을 뜻하는 PLANET의 뜻을 포함한 이름으로, 목표를 계획하고 달성하는 기쁨을 줄 수 있도록 도와주는 서비스
<br/>
<br/>

## 🔗 Site
### [Planit](https://planit.co.kr/)

<br/>

## 💻 Stack
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <br>     
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=pink">   
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">   
  <img src="https://img.shields.io/badge/kakao login-FFCD00?style=for-the-badge&logo=kakao&logoColor=black">
  <br>
</div>

<br/>

## 🧙 Team
|신원혁|박종익|이길종|박준기|김자성
|---|---|---|---|---|
|[Github](https://github.com/god1hyuk)|[Github](https://github.com/ParkJong-ic)|[Github](https://github.com/Jongleee)|[Github](https://github.com/byjgpark)|[Github](https://github.com/jaseongkim)|
|BE / Spring|BE / Spring|BE / Spring|FE / React|FE / React|

<br/>

## :santa: Architecture

![Planit 아키텍쳐](https://user-images.githubusercontent.com/81502140/193481909-30765c17-2a8e-419c-bcfa-bea8736ebd18.png)

<br/>


| 이름 | 사용 이유 |
| --- | --- |
| React | Component 단위의 작성을 통해 UI를 구성하는 개별적인 뷰단위의 개발을 하여 하나의 컴포넌트를 여러 부분에 다중 사용할수 있게 만들거 생산성과 유지 보수를 용이하게 하고 JSX를 사용해 컴포넌트를 쉽게 구성할수 있도록 해주며 Vitual DOM을 이용해 연산 비용을 줄일수 있기에 React 라이브러리를 사용하게 되었습니다. |
| React-Redux Toolkit | React 상태관리를 전역으로 Redux store에 저장해 각각 기능 마다 Slice 로 구분해 서버에온 데이터들을 관리해주기 위해서 서 React-Redux ToolKit 을 사용했습니다.| 
| Context API | 단순히 데이터를 Redux store와 Slice 로 dispatch 시킬필요 없이 하위 컴포넌트에 전역으로 데이터를 내려주기 위해서 Context API를 사용했습니다. |  
| Styled-Component | CSS 를 컴포넌트 단위로 쪼갤수 있어 사용 빈도가 높은 CSS를 재사용할수 있고 다양한 스타일들을 분기처리를 할수있어 Styled-Component 를 사용했습니다. |
| Axios | 우선 Fetch 같은 경우 호환성이 떨어져 웹브라우저가 구버전일 경우 지원하지 않는 경우가 있으며, Fetch에 비해 객체의 형태로 Param이나 Query를 성정할수 있어 가독성이 뛰어나며, 따로 JSON형태의 변환이 필요없이 자동 변환이 되고 개선된 error handling의 성능을 가지고 있기에 Axios를 사용하게 되었습니다. |

<br/>

## 💥 Troubleshooting

- 상위 Header 재사용으로 인해 navigate redirect 문제 [상세보기 - WIKI 이동](https://github.com/hanghae-w8-t4-plan-it/frontend/wiki/%EC%83%81%EC%9C%84-Header-%EC%9E%AC%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%95%B4-navigate-redirect-%EB%AC%B8%EC%A0%9C)
- 행성 사진들이 생명주기때문에 undefined 되는 문제 [상세보기 - WIKI 이동](https://github.com/hanghae-w8-t4-plan-it/frontend/wiki/%ED%96%89%EC%84%B1-%EC%82%AC%EC%A7%84%EB%93%A4%EC%9D%B4-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0%EB%95%8C%EB%AC%B8%EC%97%90-undefined-%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C)
- 새로고침시 State 에 저장된 값들이 없어 지는 현상 [상세보기 - WIKI 이동](https://github.com/hanghae-w8-t4-plan-it/frontend/wiki/%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%8B%9C-State-%EC%97%90-%EC%A0%80%EC%9E%A5%EB%90%9C-%EA%B0%92%EB%93%A4%EC%9D%B4-%EC%97%86%EC%96%B4-%EC%A7%80%EB%8A%94-%ED%98%84%EC%83%81)
<br/> 

import React from "react";
import styled from "styled-components";

const GreetTitle = styled.div`
    font-size: 18px;
    padding: 0 0 15px 0;
    text-align : center; 
    justify-content: center;
    font-weight: bold;
`;
const GreetContent = styled.div`
    font-size: 15px;  
    text-align : center; 
    justify-content: center;
    line-height: 1.8rem;
    white-space : pre-wrap;
`;
const GreetUsers = styled.div`
    padding : 2rem 0 0 0; 
    text-align : center; 
    justify-content: center;
`;
const GreetUser = styled.div`
    padding-bottom : 10px;
`;

function Greeting(){
    return (
        <div className="greetingContent">
            <GreetTitle>이제 서로, 평생 함께</GreetTitle>
            <GreetContent>
                서로가 마주보며 다져온 사랑을
                이제 함께 한 곳을 바라보며
                걸어갈 수 있는 큰 사랑으로
                키우고자 합니다.
            </GreetContent>
            <GreetContent>
                저희 두 사람이 사랑의 이름으로
                지켜나갈 수 있도록
                앞날을 축복해 주시면
                감사하겠습니다.
            </GreetContent>
            <GreetUsers>
                <GreetUser>
                    <span>000 / 000의 장남</span><span>&nbsp;000</span>
                </GreetUser>
                <GreetUser>
                    <span>000 / 000의 장녀</span><span>&nbsp;000</span>
                </GreetUser>
            </GreetUsers>
        </div>
    );
}
export default Greeting;
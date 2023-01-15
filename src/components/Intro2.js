import React from "react";
import styled from "styled-components";
import wedding1 from "../img/flower.jpg";

const weddingProfile = {
    width: "100%",
};

const visualSectionStyle = {
    width : "100%",
    paddingBottom : "4rem"
}
const visualSectionStyle2 = {
    borderRight : "1px solid #090303",
    paddingRight : "0.7rem"
}

const Name = styled.div`
    font-size : 20px;
    text-align : right;
    margin : 2rem 0 0 0;
`;
const Time = styled.div`
    font-size : 15px;
    text-align : right;
    margin-top : 10px;
`;
const Location = styled.div`
    font-size : 15px;
    text-align : right;
    margin-top : 5px;    
`;
export default function Intro2() {
    return (
        <div style={visualSectionStyle}>
            <img style={weddingProfile} src={wedding1} alt="wedding1"/>
            <div style={visualSectionStyle2}>
                <Name> 신랑 X 신부 </Name>
                <Time> 토요일 10시 20분 </Time>
                <Location> 웨딩홀 0층 </Location>
            </div>
        </div>
    );
}
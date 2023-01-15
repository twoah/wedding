import React from "react";
import styled from "styled-components";
const Title = styled.div`
    padding :8rem 0 1.1rem 0;
    text-align : center;
    font-weight: bold;
    font-size: 18px;
`;
const Location = styled.div`
    padding : 15px 0 12px 0;
    text-align : center;
    font-size: 15px;  
`;
const LocationDetail = styled.div`
    padding : 0;
    text-align : center;
    color : gray;
    font-size: 13px;  
`;
export default function MapInfo(){
    return (
        <div style={{paddingBottom: "25px"}}>
            <Title>오시는 길</Title>
            <Location>잇츠카드 웨딩홀 6층 노블레스홀</Location>
            <LocationDetail>서울특별시 강남구 논현로 742</LocationDetail>
        </div>
    );
}
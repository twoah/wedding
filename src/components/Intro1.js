import React from "react";
import styled from "styled-components";

const Text = styled.div`
    width : 1.8rem; 
    font-size : 1.1rem;
    min-height : 5rem;
    padding-left : 0.7rem;
    border-left : 1px solid #090303;
`;
const visualSectionStyle = {
    width : "100%",
    display : "block",
    padding : "2rem 0 2rem",
    margin : "0 auto"
}
export default function Intro1(){
    return (
       <div style={visualSectionStyle}>
           <Text>10月26日</Text>
       </div>
    );

};
